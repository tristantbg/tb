<?php snippet('header') ?>

<section id="landing">
	<div class="galaxy">
	<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 1280 800" style="enable-background:new 0 0 1280 800;" xml:space="preserve" preserveAspectRatio="xMidYMin">
	<ellipse id="el1" class="st0 hide" cx="640" cy="400" rx="90" ry="1"/>
	<ellipse id="el2" class="st0 hide" cx="640" cy="400" rx="900" ry="90"/>
	<ellipse id="el3" class="st0 hide" cx="640" cy="400" rx="900" ry="400"/>
	<ellipse id="el4" class="st0 hide" cx="640" cy="400" rx="900" ry="270"/>
	<ellipse id="el5" class="st0 hide" cx="640" cy="400" rx="900" ry="600"/>
	</svg>
	</div>
	<div id="site-title">
		<h1><?= $site->title()->html() ?></h1>
		<h5><?= $site->tagline()->html() ?></h5>
	</div>
</section>

<?php $websites = $pages->find('websites')->children()->visible() ?>

<section id="selected-projects">

	<h4>Selected projects</h4>

	<?php foreach ($websites as $key => $website): ?>

		<div class="project">
			
			<a href="<?= $website->link() ?>" target="_blank">
			<h2 class="project-title"><?= $website->title()->html() ?></h2>
			</a>
			<div class="link">
				<?= str_replace('http://','',$website->link()) ?>
			</div>
			<div class="infos">
				<span class="year"><?= $website->date('Y') ?></span>
				<?php if($website->dev()->bool()): ?>
				<span>Development [<span class="checked"></span>]</span>
				<?php endif ?>
				<?php foreach ($website->credits()->toStructure() as $key => $credit): ?>
				<?php
				$entry = $credit->credittitle()->html().' [';
				if ($credit->creditname()->isNotEmpty()) {
					(string)$name = $credit->creditname()->html();
					if ($credit->creditlink()->isNotEmpty()) {
						(string)$name = '<a href="'.$credit->creditlink().'" target="_blank">'.$name.'</a>';
					}
					$entry .= $name;
				} else {
					$entry .= '<span class="checked"></span>';
				}
				$entry .= ']'
				?>
				<span><?= $entry ?></span>
				<?php endforeach ?>
			</div>
			<div class="video">
			<!-- <ul class="ui"><li></li><li></li><li></li></ul> -->
			<?php if ($website->featured()->isNotEmpty() && $website->videofile()->isEmpty()): ?>
				<img src="<?= resizeOnDemand($website->featured()->toFile(), 1000) ?>" alt="<?= $website->title()->html() ?>" width="100%" height="auto">
			<?php elseif($website->featured()->isNotEmpty() && $website->videofile()->isNotEmpty()): ?>
				<video autobuffer loop muted poster="<?= resizeOnDemand($website->featured()->toFile(), 1000) ?>" width="100%" height="100%">
				  <source src="<?= $website->videofile()->toFile()->url() ?>" type="video/mp4">
				  Your browser does not support the video tag.
				</video>
			<?php endif ?>
			</div>
		</div>

	<?php endforeach ?>
</section>

<section id="connect">

	<div class="inner">
		<h3>
		Contributing to the internet with
		<br>Algorithms [<span class="number">1</span>] Graphics [<span class="number">2</span>] Photography [<span class="number">3</span>]
		<br>from 2014 to <?= date('Y') ?>
		</h3>
		<h5>Hit number to discover</h5>
		
		<h3>Based in Paris, France</h3>
		<h5>N 48°53'12" — E 2°20'35"</h5>

		<h3>Connect</h3>
		<div class="list">
			<?= $site->contact()->kt() ?>
		</div>
	</div>

	<div id="discover">
		<div id="grid">
			<svg version="1.1" id="grid-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1280 458.3" style="enable-background:new 0 0 1280 458.3;" xml:space="preserve">
		<g>
			<path class="st0" d="M-478.3,444.7c745.6,0,1491.1,0,2236.7,0"/>
			<path class="st0" d="M-445.7,431.1c723.8,0,1447.6,0,2171.4,0"/>
			<path class="st0" d="M-411.6,416.8c701.1,0,1402.2,0,2103.2,0"/>
			<path class="st0" d="M-382,404.5c681.3,0,1362.6,0,2044,0"/>
			<path class="st0" d="M-347.9,390.2c658.6,0,1317.2,0,1975.8,0"/>
			<path class="st0" d="M-316.8,377.2c637.8,0,1275.7,0,1913.5,0"/>
			<path class="st0" d="M-284.1,363.6c616.1,0,1232.2,0,1848.3,0"/>
			<path class="st0" d="M-253,350.6c595.3,0,1190.7,0,1786,0"/>
			<path class="st0" d="M-218.9,336.4c572.6,0,1145.2,0,1717.8,0"/>
			<path class="st0" d="M-186.3,322.7c550.9,0,1101.7,0,1652.6,0"/>
			<path class="st0" d="M-155.2,309.8c530.1,0,1060.2,0,1590.4,0"/>
			<path class="st0" d="M-121.1,295.5c507.4,0,1014.8,0,1522.2,0"/>
			<path class="st0" d="M-90,282.5c486.6,0,973.3,0,1459.9,0"/>
			<path class="st0" d="M-55.9,268.3c463.9,0,927.8,0,1391.7,0"/>
			<path class="st0" d="M-26.2,255.9c444.1,0,888.3,0,1332.4,0"/>
			<path class="st0" d="M6.4,242.3c422.4,0,844.8,0,1267.2,0"/>
			<path class="st0" d="M39,228.7c400.7,0,801.3,0,1202,0"/>
			<path class="st0" d="M70.1,215.7c379.9,0,759.8,0,1139.7,0"/>
			<path class="st0" d="M104.2,201.4c357.2,0,714.4,0,1071.5,0"/>
			<path class="st0" d="M136.8,187.8c335.4,0,670.9,0,1006.3,0"/>
			<path class="st0" d="M1066.2,174.5c204.7,94.5,409.3,189,614,283.5"/>
			<path class="st0" d="M1021.4,174.5c183.1,94.5,366.3,189,549.4,283.5"/>
			<path class="st0" d="M976.6,174.5c161.6,94.5,323.3,189,484.9,283.5"/>
			<path class="st0" d="M931.8,174.5c140.1,94.5,280.2,189,420.3,283.5"/>
			<path class="st0" d="M887,174.5c118.6,94.5,237.2,189,355.8,283.5"/>
			<path class="st0" d="M842.2,174.5c97.1,94.5,194.2,189,291.3,283.5"/>
			<path class="st0" d="M796.8,174.5c75.3,94.5,150.6,189,225.9,283.5"/>
			<path class="st0" d="M752,174.5c53.8,94.5,107.6,189,161.3,283.5"/>
			<path class="st0" d="M707.2,174.5c32.3,94.5,64.5,189,96.8,283.5"/>
			<path class="st0" d="M662.4,174.5c10.8,94.5,21.5,189,32.3,283.5"/>
			<path class="st0" d="M617.6,174.5c-10.8,94.5-21.5,189-32.3,283.5"/>
			<path class="st0" d="M572.8,174.5C540.5,269,508.3,363.5,476,458"/>
			<path class="st0" d="M528,174.5C474.2,269,420.4,363.5,366.6,458"/>
			<path class="st0" d="M483.2,174.5C407.9,269,332.6,363.5,257.3,458"/>
			<path class="st0" d="M437.8,174.5C340.7,269,243.6,363.5,146.5,458"/>
			<path class="st0" d="M393,174.5C274.4,269,155.8,363.5,37.2,458"/>
			<path class="st0" d="M348.2,174.5C208.1,269,68,363.5-72.1,458"/>
			<path class="st0" d="M303.4,174.5C141.8,269-19.8,363.5-181.5,458"/>
			<path class="st0" d="M258.6,174.5C75.5,269-107.7,363.5-290.8,458"/>
			<path class="st0" d="M213.8,174.5C9.2,269-195.5,363.5-400.2,458"/>
		</g>
		</svg>

		</div>
		<div id="discover-images"></div>
		<?php 
		$algorithmsImg = $pages->find('algorithms')->images()->shuffle();
		$graphicsImg = $pages->find('graphics')->images()->shuffle();
		$photographyImg = $pages->find('photography')->images()->shuffle();
		$thumbSize = 800;

		$algorithms = [];
		foreach($algorithmsImg as $key => $img):
			$url = thumb($img, array('width'=> $thumbSize))->url();
			array_push($algorithms, $url);
		endforeach;

		$graphics = [];
		foreach($graphicsImg as $key => $img):
			$url = thumb($img, array('width'=> $thumbSize))->url();
			array_push($graphics, $url);
		endforeach;

		$photography = [];
		foreach($photographyImg as $key => $img):
			$url = thumb($img, array('width'=> $thumbSize))->url();
			array_push($photography, $url);
		endforeach;
		?>

		<script>
			var discover = [<?= json_encode($algorithms) ?>,<?= json_encode($graphics) ?>,<?= json_encode($photography) ?>];
		</script>
	</div>

</section>

<?php snippet('footer') ?>