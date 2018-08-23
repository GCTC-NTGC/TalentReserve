<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 12 Jul 2018 22:39:27 +0000.
 */

namespace App\Models\Lookup;

use App\Models\BaseModel;

/**
 * Class CriteriaTypeTranslation
 *
 * @property int $id
 * @property string $value
 * @property string $description
 * @property string $locale
<<<<<<< HEAD
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 *
 * @property \App\Models\CriteriaType $criteria_type
 */
class CriteriaTypeTranslation extends Eloquent
{
=======
 * @property \Jenssegers\Date\Date $created_at
 * @property \Jenssegers\Date\Date $updated_at
 *
 * @property \App\Models\CriteriaType $criteria_type
 */
class CriteriaTypeTranslation extends BaseModel
{
    >>>>>>> dev

    protected $fillable = [];

    public function criteria_type()
    {
        return $this->belongsTo(\App\Models\CriteriaType::class);
    }
}
