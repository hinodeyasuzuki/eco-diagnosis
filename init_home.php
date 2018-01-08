<?php
/* D6 eco home diagnosis system
 *
 * for home setting 
 */

// for home
$title = $lang["home_title"];

// 1 original js
function getlogiclist( $area )  {
	return '
	<script src="'.$area.'/areaset/accons.js" type="text/javascript"></script>
	<script src="'.$area.'/areaset/acload.js" type="text/javascript"></script>
	<script src="'.$area.'/areaset/acadd.js" type="text/javascript"></script>
	<script src="'.$area.'/areaset/area.js" type="text/javascript"></script>
	<script src="'.$area.'/areaset/unit.js" type="text/javascript"></script>

	<script src="'.$area.'/home/scenarioset.js" type="text/javascript"></script>
	<script src="'.$area.'/home/scenariofix.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consEnergy.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consSeason.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consTOTAL.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWshower.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWtub.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWdresser.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWdishwash.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHWtoilet.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCOsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consACcool.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHTsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consHTcold.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consACheat.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consAC.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consRFsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consRF.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consLIsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consLI.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consTVsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consTV.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consDRsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCRsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCR.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCRtrip.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCKsum.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCKpot.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCKrice.js" type="text/javascript"></script>
	<script src="'.$area.'/home/consCKcook.js" type="text/javascript"></script>
	';
}

$include_logic = getlogiclist( "d6" );
$include_logic .= getlogiclist( $lang["d6folder"] );


$includeeachjs = $include_common . $include_logic;

//2 packed js for worker : execute short.bat to make this file 
$includesumjs  = $lang["d6folder"].'/d6home.js';

//3 compressed for worker : execute http://dean.edwards.name/packer/ 
$includeminjs  = $lang["d6folder"].'/d6home.min.js';
	
//4.5 compressed common logic : execute http://dean.edwards.name/packer/ 
$includemincommonjs  ='d6/d6common.min.js';

//5 compressed common logic : execute http://dean.edwards.name/packer/ 
$includeminlogicjs  ='d6/'.$lang["d6folder"].'/d6homelogic.min.js';
	
// joyfull mode not use------------------------------------------------------
if ( $joyfullMode == 1 ) {
	$title = $lang["home_joy_title"];
	$scripts  .= '<script>var modalJoy = 1;</script>';
}
