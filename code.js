var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","f2892751-1030-40da-9dd8-272676dcdad9","faf89400-0e70-41f0-a8dc-e10e7dc8dba8","25831ce9-313a-4678-9ce4-20036709431b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":4,"looping":true,"frameDelay":12,"version":"adVhi2f97FGRB79T2K4l5IZQAz_8K7GA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"n7CUh6Ve0WelQjznLwaTiLE_ghr9Krmn","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"jrBJPsCJ72mYSzTxSvpjSzOuqUe6mqQD","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"f2892751-1030-40da-9dd8-272676dcdad9":{"name":"street","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XkmdSnrUApE7s1A8vKGFzkb_2ulAglEG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f2892751-1030-40da-9dd8-272676dcdad9.png"},"faf89400-0e70-41f0-a8dc-e10e7dc8dba8":{"name":"chimps_1","sourceUrl":null,"frameSize":{"x":387,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"7z5ehAKFN8Wp4wzaPnMCdc4VAlcoaz6w","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":397},"rootRelativePath":"assets/faf89400-0e70-41f0-a8dc-e10e7dc8dba8.png"},"25831ce9-313a-4678-9ce4-20036709431b":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("city_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("chimps_1");
hero.scale=.2;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(sreet);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_hits/vibrant_crate_break_4.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_alerts/vibrant_game_carton_start_game_2_long.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
  
  
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
