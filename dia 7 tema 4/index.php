<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <link href="css/default.css" rel="stylesheet" />
        
        <!-- jQuery -->
        <!-- include jquery toolkit here -->
        <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.js"></script>
        <!-- default javascript content -->
        <!-- include your default js file here -->
        <!-- data-main attribute tells require.js to load
             scripts/main.js after require.js loads. -->
        <script data-main="scripts/main" src="scripts/require.js"></script>
        
    </head>
    <body>
        <div data-role="page" id="foo">
            <header>
                <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
            </header>

            <!-- add your content here -->
            <h3>-- Enjoy! --</h3>
        
            <footer>
                <div><?php echo $title; ?> v1.0</div>
                <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
                <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>  
            </footer>
        </div>
        <div data-role="page" id="dialogs">
            <div data-role="header">	
                <p>Dialogs</p>			
            </div>
            <div data-role="content">	
                <p> </p>			
            </div>
        </div>
    </body>
</html>