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

</section>

<?php snippet('footer') ?>