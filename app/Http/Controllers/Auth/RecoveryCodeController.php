<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Facades\App\Services\WhichPortal;
use PragmaRX\Google2FALaravel\Support\Authenticator;
use Illuminate\Support\Facades\Validator;

class RecoveryCodeController extends AuthController
{
    use GenerateRecoveryCodes;

    public function show(Request $request)
    {
        $user = $request->user();
        $this->generateCodesForUser($user);

        $settings_url = '';
        if (WhichPortal::isAdminPortal()) {
            $settings_url = backpack_url('2fa');
        } elseif (WhichPortal::isManagerPortal()) {
            $settings_url = route('manager.settings.edit');
        } elseif (WhichPortal::isHrPortal()) {
            $settings_url = route('hr_advisor.settings.edit');
        } elseif (WhichPortal::isApplicantPortal()) {
            $settings_url = route('settings.edit');
        }

        return view('auth.recovery_codes', [
            'recovery_codes' => Lang::get('common/auth/recovery_codes'),
            'codes' => $user->recovery_codes,
            'settings_url' => $settings_url,
        ]);
    }

    public function generate(Request $request)
    {
        $user = $request->user();
        $this->generateCodesForUser($user);

        $recovery_codes_url = '';
        if (WhichPortal::isApplicantPortal()) {
            $recovery_codes_url = route('recovery_codes.show');
        } elseif (WhichPortal::isManagerPortal()) {
            $recovery_codes_url = route('manager.recovery_codes.show');
        } elseif (WhichPortal::isHrPortal()) {
            $recovery_codes_url = route('hr_advisor.recovery_codes.show');
        } elseif (WhichPortal::isAdminPortal()) {
            $recovery_codes_url = route('admin.recovery_codes.show');
        }

        return redirect($recovery_codes_url);
    }

    public function use(Request $request)
    {
        return view('auth.use_recovery_code', [
            'recover' => Lang::get('common/auth/use_recovery_code'),
            'return_url' => session()->get('url.expected'),
        ]);
    }

    public function authenticate(Request $request)
    {
        Validator::make($request->all(), [
            'recovery_code' => 'required|string',
        ])->validate();
        $recovery_code = $request->input('recovery_code');
        $user = $request->user();
        $valid_codes = collect($user->recovery_codes);
        if ($valid_codes->contains($recovery_code)) {
            $authenticator = app(Authenticator::class)->boot($request);
            $authenticator->login();
            $still_valid_codes = $valid_codes->filter(function ($value) use ($recovery_code) {
                return $value != $recovery_code;
            });
            $user->recovery_codes = $still_valid_codes->toArray();
            $user->save();
            // If authentication passes, remove the expected url from the session.
            $expectedUrl = session()->get('url.expected');
            session()->remove('url.expected');
            return redirect($expectedUrl);
        }
        return redirect(route('recovery_codes.use'))
            ->withErrors(['incorrect' => Lang::get('common/auth/use_recovery_code.incorrect_code')]);
    }
}
