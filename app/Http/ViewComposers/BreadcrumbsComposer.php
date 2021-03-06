<?php

namespace App\Http\ViewComposers;

use Facades\App\Services\WhichPortal;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;

class BreadcrumbsComposer
{
    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * Initialize a new composer instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Bind data to the view.
     *
     * @param  \Illuminate\View\View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $segments = $this->parseSegments();
        $breadcrumbs_lang = Lang::get('common/breadcrumbs')['applicant'];

        if (WhichPortal::isManagerPortal()) {
            $segments = $segments->slice(1);
            $breadcrumbs_lang = Lang::get('common/breadcrumbs')['manager'];
        } elseif (WhichPortal::isHrPortal()) {
            $segments = $segments->slice(1);
            $breadcrumbs_lang = Lang::get('common/breadcrumbs')['hr'];
        }

        $view->with('breadcrumbs', $segments);
        $view->with('breadcrumbs_lang', $breadcrumbs_lang);
    }

    /**
     * Parse the request route segments.
     *
     * @return \Illuminate\Support\Collection
     */
    protected function parseSegments()
    {
        return collect($this->request->segments())->mapWithKeys(function ($segment, $key) {
            return [
                $segment => implode('/', array_slice($this->request->segments(), 0, $key + 1)),
            ];
        });
    }
}
