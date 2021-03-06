<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeLanguageRequirements extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        DB::table('language_requirements')->whereIn('id', [4])->delete();

        DB::table('language_requirement_translations')->whereIn('id', [7, 8])->delete();

        DB::table('language_requirement_translations')->whereIn('id', [5])->update([
            'value' => 'Bilingual - Advanced'
        ]);

        DB::table('language_requirement_translations')->whereIn('id', [6])->update([
            'value' => 'Bilingue - Avancé'
        ]);
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        DB::table('language_requirements')->insert([
            ['id' => 4, 'name' => 'english_or_french'],
        ]);

        DB::table('language_requirement_translations')->insert([
            'id' => 7, 'locale' => 'en', 'language_requirement_id' => 4, 'value' => 'English or French',
            'id' => 8, 'locale' => 'fr', 'language_requirement_id' => 4, 'value' => 'Anglais ou Français',
        ]);

        DB::table('language_requirement_translations')->whereIn('id', [5])->update([
            'value' => 'Bilingual'
        ]);

        DB::table('language_requirement_translations')->whereIn('id', [6])->update([
            'value' => 'Bilingue'
        ]);
    }
}
