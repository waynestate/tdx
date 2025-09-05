<?php

$html_files = [
    $document_start = file_get_contents('layout/document-start.html'),
    $service_portal = file_get_contents('modules/service-portal.html'),
    $search  = file_get_contents('modules/search.html'),
    $portal_overview = file_get_contents('modules/portal-overview.html'),
    $footer = file_get_contents('modules/footer.html'),
    $document_end = file_get_contents('layout/document-end.html'),
];

foreach ($html_files as $file) {
    echo($file);
}

?>
