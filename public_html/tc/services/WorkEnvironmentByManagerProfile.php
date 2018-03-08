<?php

    date_default_timezone_set('America/Toronto');
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    set_time_limit(0);

    if(!isset($_SESSION)){
        session_start();
    }

    /*set api path*/
    set_include_path(get_include_path() . PATH_SEPARATOR);
    
    require_once '../controller/WorkEnvironmentController.php';
    require_once '../model/WorkEnvironment.php';
    require_once '../model/BasicWorkEnvironment.php';
    require_once '../model/WorkplacePhotoCaption.php';
    require_once '../utils/Utils.php';

    $requestMethod = filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_ENCODED);
    $requestURI = urldecode(filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_ENCODED));

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=utf-8");

    $context = '/';

    $requestParams = substr($requestURI,strlen($context));
    //var_dump($requestParams);
    switch ($requestMethod) {
        case 'GET':
            //TODO: add, then change 'OPTIONS' to refelct
            break;
        case 'POST':
            
            break;
        case 'DELETE':
            //Here Handle DELETE Request 
            break;
        case 'PUT':
            if(strlen($requestParams) > 1){
                $managerProfileId = Utils::getParameterFromRequest($requestParams,4);
                
                $json = json_decode(file_get_contents('php://input'), TRUE);
                
                $basicWorkEnvironment = new BasicWorkEnvironment();
                $basicWorkEnvironment->setId($json['id']);
                $basicWorkEnvironment->setRemote_allowed($json['remote_allowed']);
                $basicWorkEnvironment->setTelework_allowed($json['telework_allowed']);
                $basicWorkEnvironment->setFlexible_allowed($json['flexible_allowed']);
                
                $photo_captions = [];
                foreach($json['workplace_photo_captions'] as $captionJson) {
                    $caption = new WorkplacePhotoCaption();
                    $caption->setWork_environment_id($captionJson['work_environment_id']);
                    $caption->setPhoto_name($captionJson['photo_name']);
                    $caption->setDescription($captionJson['description']);                    
                    $photo_captions[] = $caption;
                }
                
                $workEnvironment = new WorkEnvironment($basicWorkEnvironment, $photo_captions);           
                
                $result = WorkEnvironmentController::setWorkEnvironmentByManagerProfile($workEnvironment, $managerProfileId);
                $resultJson = json_encode($result, JSON_PRETTY_PRINT);
                echo($resultJson);                
            }
            break;
        case 'OPTIONS':
            //Here Handle OPTIONS/Pre-flight requests
            header("Access-Control-Allow-Headers: accept, content-type");
            header("Access-Control-Allow-Methods: PUT");
            echo("");
            break;
    }