var e=Object.defineProperty,n=(n,t,s)=>(((n,t,s)=>{t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s})(n,"symbol"!=typeof t?t+"":t,s),s);import"./vendor.d4751c75.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();var t="./assets/gasp.a7266c19.mp3";const s="space-debris-sheet";class r{constructor(){n(this,"sprites")}preload(e){e.load.spritesheet(s,"./assets/space-debris.5bf46d2a.png",{frameWidth:54,frameHeight:54,margin:0,spacing:0})}create(e){this.sprites=[];for(let n=0;n<20;n++){const n=Phaser.Math.Between(-64,e.game.scale.width),t=Phaser.Math.Between(-64,e.game.scale.height),r=e.add.image(n,t,s,Math.floor(4*Math.random()));r.setTint(6710886),r.scale=1920*(.2+2*Math.random())/1e3,this.sprites.push({s:r,velocity:1920*(.1+.5*Math.random())/1e3,angularV:.3*(.5-Math.random())})}}update(e){const n=e.game.scale.height+100;for(let t=0;t<this.sprites.length;t++){const e=this.sprites[t].s;e.y+=this.sprites[t].velocity,e.angle+=this.sprites[t].angularV,e.y>n&&(e.y=-100)}}}class i{constructor(e){n(this,"scene"),n(this,"sceneText"),n(this,"graphics"),n(this,"rect"),n(this,"width",0),n(this,"boxRestColor",3618615),n(this,"boxColor",this.boxRestColor),n(this,"onPress",(()=>{})),this.scene=e,this.sceneText=e.add.text(50,50,"will-be-replaced-text"),this.sceneText.setFontSize(64),this.sceneText.setAlign("center"),this.sceneText.setOrigin(.5),this.sceneText.setInteractive(),this.sceneText.style.setTestString("䲜笑う狭い友達|週漢字⎝|MÉgjpqy"),this.sceneText.setWordWrapWidth(864,!0),this.graphics=this.scene.add.graphics(),this.graphics.setScrollFactor(0),this.rect=e.add.rectangle(),this.rect.setOrigin(0,0),this.rect.setScrollFactor(0),this.rect.setInteractive(),this.rect.on("pointerover",(()=>this.enterButtonHoverState())).on("pointerout",(()=>this.enterButtonRestState())).on("pointerdown",(()=>this.enterButtonActiveState())).on("pointerup",(()=>{this.enterButtonHoverState(),this.onPress()})),this.setXY(0,0),this.rect.depth=11,this.sceneText.depth=10,this.graphics.depth=9}enterButtonHoverState(){this.boxColor=6303792,this.fixGraphics()}enterButtonRestState(){this.boxColor=this.boxRestColor,this.fixGraphics()}enterButtonActiveState(){this.boxColor=9449520,this.fixGraphics()}fixGraphics(){this.graphics.clear();let e=this.sceneText.width+64;const n=this.sceneText.height+64,t=this.sceneText.getBounds();let s=t.x-32;const r=t.y-32;this.width&&(e=this.width,s=this.sceneText.x-this.width/2),this.rect.x=s,this.rect.y=r,this.rect.displayWidth=e,this.rect.displayHeight=n,this.graphics.fillStyle(this.boxColor,.8),this.graphics.fillRect(s,r,e-1,n-1),this.graphics.lineStyle(3,4212632,1),this.graphics.strokeRect(s,r,e,n)}setText(e){this.sceneText.setText(e),this.fixGraphics()}setXY(e,n){this.sceneText.x=e,this.sceneText.y=n,this.fixGraphics()}setRestColor(e){this.boxRestColor=e,this.enterButtonRestState()}}var a="行く:いく:go\n見る:みる:see, look at\n多い:おおい:a lot of, many\n家:いえ:home, household, house, dwelling\n:これ:this, this one\n:それ:that, that one\n私:わたし:I\n仕事:しごと:work, job\n:いつ:when\n:する:do, make\n出る:でる:go out, leave\n使う:つかう:use, make use of\n所:ところ:place\n作る:つくる:make, create\n思う:おもう:think\n持つ:もつ:have, possess\n買う:かう:buy\n時間:じかん:time, hour\n知る:しる:know\n同じ:おなじ:same, identical\n今:いま:now\n新しい:あたらしい:new\n:なる:become\n:まだ:not yet, still\n:あと:after\n聞く:きく:hear, ask\n言う:いう:say, tell\n少ない:すくない:few, little\n高い:たかい:high, tall\n子供:こども:child\n:そう:so, that way\n:もう:already, yet, another, again\n学生:がくせい:student\n熱い:あつい:hot to touch\n:どうぞ:please\n午後:ごご:afternoon, p.m.\n長い:ながい:long\n本:ほん:book, volume\n今年:ことし:this year\n:よく:often, well\n彼女:かのじょ:she, one’s girlfriend\n:どう:how, what\n言葉:ことば:word, language\n顔:かお:face\n終わる:おわる:finish, end\n一つ:ひとつ:one thing\n:あげる:give, offer\n:こう:like this, such\n学校:がっこう:school\n:くれる:be given\n始める:はじめる:start something\n起きる:おきる:get up, get out of bed, occur, happen\n春:はる:spring\n午前:ごぜん:morning, a.m.\n別:べつ:another, different\n:どこ:where\n部屋:へや:room\n若い:わかい:young\n車:くるま:car, automobile\n置く:おく:put, place\n住む:すむ:live, reside\n働く:はたらく:work\n難しい:むずかしい:difficult\n先生:せんせい:teacher\n立つ:たつ:stand, rise\n呼ぶ:よぶ:call, name\n大学:だいがく:university, college\n安い:やすい:cheap, inexpensive\n:もっと:more\n帰る:かえる:go back home\n分かる:わかる:understand\n広い:ひろい:wide, big\n数:すう:number\n近い:ちかい:near, close\n:そこ:there\n走る:はしる:run\n入れる:いれる:put in\n教える:おしえる:teach, tell\n歩く:あるく:walk, go on foot\n会う:あう:meet\n書く:かく:write\n頭:あたま:head\n売る:うる:sell\n大好き:だいすき:like something a lot\n体:からだ:body, physique\n直ぐ:すぐ:at once, soon\n飛ぶ:とぶ:fly\n:とても:very\n誰:だれ:who\n好き:すき:favorite, liked\n読む:よむ:read\n次:つぎ:next\n:あなた:you\n飲む:のむ:drink\n古い:ふるい:old\n質問:しつもん:question\n今日:きょう:today\n友達:ともだち:friend, companion\n早い:はやい:early\n:どれ:what, which\n美しい:うつくしい:beautiful\n:いつも:always\n足:あし:leg, foot\n起こす:おこす:wake someone up\n見せる:みせる:show\n娘:むすめ:daughter, girl\n楽しむ:たのしむ:enjoy\n色:いろ:color\n:みんな:everybody\n取る:とる:take, get\n勉強:べんきょう:study\n:できる:can do, be good at\n短い:みじかい:short, brief\n落ちる:おちる:fall, come down\n息子:むすこ:son\n白い:しろい:white, blank\n飛行機:ひこうき:airplane\n病気:びょうき:illness\n冬:ふゆ:winter\n年:とし:year, age\n重い:おもい:heavy\n胸:むね:chest, breast\n払う:はらう:pay money, respect, attention, etc.\n軽い:かるい:light of weight\n見つける:みつける:find\n忘れる:わすれる:forget, leave behind\n酒:さけ:alcohol, rice wine\n:どちら:which\n姉:あね:one’s own older sister\n覚える:おぼえる:memorize, learn\n狭い:せまい:narrow, small\n赤い:あかい:red\n着る:きる:wear, put on\n笑う:わらう:laugh, smile\n一番:いちばん:most, best\n授業:じゅうぎょ:class session, lecture\n週:しゅう:week\n漢字:かんじ:Chinese character\n自転車:じてんしゃ:bicycle\n電車:でんしゃ:train\n探す:さがす:search for, look for\n紙:かみ:paper\n歌う:うたう:sing\n遅い:おそい:slow, late\n首:くび:neck\n速い:はやい:fast\n一緒に:いっしょに:together, at the same time\n今月:こんげつ:this month\n遊ぶ:あそぶ:play\n遠い:とおい:far, distant\n弱い:よわい:weak\n耳:みみ:ear\n座る:すわる:sit, sit down\n右:みぎ:right\n浴びる:あびる:take a shower\n肩:かた:shoulder\n寝る:ねる:lie down and sleep, go to sleep\n消す:けす:switch off, turn off\n元気:げんき:healthy, energetic\n全部:ぜんぶ:all, whole\n去年:きょねん:last year\n引く:ひく:draw, pull\n図書館:としょかん:library\n上げる:あげる:raise, lift\n緑:みどり:green\n腕:うで:arm\n:ドア:door (loan word)\n女の子:おんなのこ:little girl\n男の子:おとこのこ:boy\n私たち:わたしたち:we\n近く:ちかく:near, close to, in the near future, before long\n:やる:do, give, give to an inferior\n:かなり:fairly, rather\n国:くに:country\n起こる:おこる:happen\n秋:あき:autumn, fall\n送る:おくる:send\n死ぬ:しぬ:die\n気持ち:きもち:feeling, sensation\n乗る:のる:ride, take\n:いる:be present, stay\n木:き:tree, wood\n開ける:あける:open, unlock doors, windows, etc.\n閉める:しめる:shut, close doors, windows, etc.\n続く:つずく:continue, follow\nお医者さん:おいしゃさん:doctor\n円:えん:Japanese yen, circle\n:ここ:here\n待つ:まつ:wait, wait for\n低い:ひくい:low, short\n:もらう:receive\n食べる:たべる:eat\n兄:あに:one’s own older brother\n名前:なまえ:name\n夫:おっと:husband\n一:いち:one\n結婚:けっこん:marriage\n親:おや:parent\n話す:はなす:speak, talk\n少し:すこし:a bit, a little while\n閉じる:とじる:shut, close books, eyes, etc.\n時:とき:time, moment\n米:こめ:rice grain\n切る:きる:cut\n楽しい:たのしい:fun, enjoyable\n服:ふく:clothes\n後ろ:うしろ:back, behind\n嬉しい:うれしい:happy, glad\n腰:こし:waist, lower back\n日曜日:にちようび:Sunday\n昼:ひる:daytime, midday\nお母さん:おかあさん:mother\n大学生:だいがくせい:university student\n終わり:おわり:end, conclusion\n背:せ:height, stature\n手伝う:てつだう:help, assist\n鼻:はな:nose\n載せる:のせる:place, put on\n悲しい:かなしい:sad\n:しゃべる:chat, talk\n甘い:あまい:sweet\n:テーブル:table\n食べ物:たべもの:food\n始まる:はじまる:begin\n:ゲーム:game\n十:じゅう:ten\n天気:てんき:weather\n暑い:あつい:hot of weather\n太い:ふとい:thick, fat\n晩:ばん:evening, night from sunset to bedtime\n土曜日:どようび:Saturday\n痛い:いたい:sore, painful\nお父さん:おとうさん:father, dad\n多分:たぶん:probably, perhaps\n時計:とけい:clock, watch\n泊まる:とまる:stay overnight\n:どうして:how come\n掛ける:かける:hang, put on\n曲がる:まがる:make a turn, turn\nお腹:おなか:stomach, belly\n:ミーティング:meeting\n嫌い:きらい:dislike habitual\n金曜日:きにょうび:Friday\n要る:いる:need, require\n無い:ない:to not be\n風邪:かぜ:cold illness\n黄色い:きいろ:yellow\n優しい:やさしい:gentle, kind\n晴れる:はれる:be sunny, clear up\n汚い:きたない:dirty\n茶色:ちゃいろ:brown\n空く:すく:be empty, become less crowded\n上る:のぼる:go up, climb\nご飯:ごはん:meal, cooked rice\n日:にち:counter for days\n髪の毛:かみのけ:hair, each single hair\n:つける:switch on, turn on\n月曜日:げつようび:Monday\n入る:はいる:enter\n:カタカナ:katakana\n今週:こんsひゅ:this week\n開く:ひらく:open books, eyes, etc.\n水:みず:water\n:あれ:that over there\n二:にち:two\n締める:しめる:tighten, fasten\n:まずい:bad taste, distasteful\n平仮名:ひらがな:hiragana\n曇る:くもる:become cloudy\n触る:さわる:touch, feel\n駄目:だめ:no good\n飲み物:のみもんお:beverage, drink\n木曜日:もくようび:Thursday\n曜日:ようび:day of the week\n:そば:side, vicinity\n:こっち:here, this way casual\n火曜日:かようび:Tuesday\n渇く:かわく:be thirsty\n三:さん:three\n水曜日:すいようび:Wednesday\n二つ:ふたつ:two things\n今晩:こんばん:this evening, tonight\n千:せん:thousand\n六日:むいか:six days, sixth of the month\nお姉さん:おねさん:older sister\n直る:なおる:be repaired, get fixed\n:ちょっと:just a moment, just a little\n四:よん:four (Japanese origin)\n:これから:from now on, after this\n考える:かんがえる:think, consider\n戻る:もどる:return to a point of departure\n変える:かえる:change something, alter\n朝:あさ:morning\n歯:は:tooth\n頑張る:がんばる:work hard, do one’s best\n携帯電話:けいたいでんわ:cellular phone\n雨:あめ:rain\n金:かね:money\n易しい:やさし:easy, simple\nお兄さん:おにさん:older brother\n大きい:おき:big\n小さい:ちいさい:small\n辛い:からい:spicy, hot\n八:はち:eight\n:あそこ:over there\n来る:くる:come\n前:まえ:front, before\n五日:いつか:five days, fifth of the month\n:いっぱい:full\n九:きゅ:nine used before counter words\n酸っぱい:すっぱい:sour\n違う:ちがう:differ, be wrong\n細い:ほそい:thin, slender\n三つ:みつ:three things\n八日:ようか:eight days, eighth of the month\n高校生:ここせい:high school student\n上手:じょうず:good, skilled\n強い:つよい:strong\n七:なんあ:seven (Japanese origin)\n二十日:はつか:20 days, 20th of the month\n左:ひだり:left\n二日:ふつか:two days, second of the month\n四つ:よつ:four things\n暖かい:あたたかい:warm\n:ある:exist, there is\n:いい:good in/spoken form\n上:うえ:up, above\n駅:えき:train station\n美味しい:おいし:tasty\n昨日:きのう:yesterday\n綺麗:きれい:pretty, clean\n五:ご:five\n九つ:ここのつ:nine things\nお願い:おねがい:favor\n答える:こたえる:give an answer\n先:さき:ahead, first\n寒い:さむい:cold temperature of the air\n四:し:four (Chinese origin)\n三日:みっか:three days, third of the month\n下:した:under, below\n大丈夫:だいじょうぶ:all right, OK\n大人:おとな:adult\n出す:だす:take out\n父:ちち:speaker’s father\n母:はhあ:speaker’s mother\n月:つき:moon\n妹:いもうと:younger sister\n冷たい:つめたい:cold to touch\n弟:おとうと:younger brother\n手:て:hand\n十日:とおか:ten days, tenth of the month\n口:くち:mouth\n夏:なつ:summer\n七つ:なんあつ:seven things\n時々:ときどき:sometimes\n何:なに:what\n人:ひと:person\n一人:ひとり:one person\n一日:ついたち:first of the month\n九日:ここのか:nine days, ninth of the month\n方:ほう:direction, side\n他:ほか:other (Japanese origin)\n僕:ぼく:I, me usually used by young males\n欲しい:ほしい:want, desire of the speaker\n万:まん:ten thousand\n見える:みえる:be visible, can see\n道:みち:street, way\n五つ:いつtす:five things\n目:め:eye\n八つ:やっつ:eight things\n止める:とめる:to stop something or someone\n四日:よっか:four days, fourth of the month\n夜:よる:night from sunset to sunrise\n来年:らいねん:next year\n六:ろく:six\n悪い:わるい:bad\nお手洗い:おてあらい:toilet, bathroom\nご主人:ごしゅじん:someone else’s husband\n本当に:ほんとうに:really, truly\n自分:じぶん:self, oneself\n:ため:sake, purpose\n見つかる:みつかる:be found, be caught\n休む:やすむ:take a rest, take a break\n:ゆっくり:slowly\n六つ:むっつ:six things\n花:はな:flower\n動く:うごく:move\n線:せん:line\n七日:なのか:seven days, seventh of the month\n以外:いがい:except for\n男:おとこ:man, male\n彼:かれ:he, one’s boyfriend\n女:おんな:woman\n妻:つま:wife\n百:ひゃく:hundred\n辺:あたり:vicinity\n店:みせ:shop, store\n閉まる:しまる:be shut, be closed\n問題:もんだい:problem, question\n必要:ひつよう:need, necessary\n:もつ:last long, be durable\n昨年:さくねん:last year , often used in writing\n治る:なおる:be cured, get well\n:ドル:dollar\n:システム:system (loan word)\n以上:いじょう:more than, not less than\n最近:さいきん:recent, latest\n世界:せかい:world\n:コンピューター:computer\n意味:いみ:meaning, sense\n増える:ふえる:increase, accrue\n選ぶ:えらぶ:choose, elect\n生活:せいかつ:life, living\n進める:すすめる:go ahead, proceed\n続ける:つずける:continue, keep up\n:ほとんど:almost, hardly\n会社:かいしゃ:company, corporation\n多く:おおく:much, largely\n話:はなし:talk, story\n上がる:あがる:go up, rise physical movement\n集める:あつめる:collect, gather\n声:こえ:voice, sound\n初めて:はじめて:for the first time\n変わる:かわる:change, turn into\n:まず:first of all, to begin with\n社会:しゃかい:society\n:プログラム:program booklet\n力:ちから:strength, power\n今回:こんかい:this time\n予定:よてい:schedule, plan\n:まま:as is, still in the current state\n:テレビ:television\n減る:へる:decrease, diminish\n消える:きえる:be extinguished, disappear\n家族:かぞく:family, household\n比べる:くらべる:compare, contrast\n生まれる:うまれる:be born, come into existence\n:ただ:free\n:これら:these\n調べる:しらべる:investigate, check\n事故:じこ:accident, trouble\n電話:でんわ:telephone, phone call\n外国:がいこく:foreign country\n銀行:ぎんこう:bank\n十分:じゅうぶん:enough, plentiful\n:あまり:not much\n写真:しゃしん:photograph\n繰り返す:くりかえす:repeat\n種類:しゅるい:kind, type\n意見:いけん:opinion\n新聞:しんぶん:newspaper\n文章:ぶんしょう:sentence, writing\n目立つ:めだつ:stand out, be conspicuous\n相手:あいて:opponent, the other party\n病院:びょういん:hospital\n厚い:あつい:thick, bulky\n忙しい:いそがしい:busy, occupied\n薄い:うすい:thin, weak\n川:かわ:river, stream\n暗い:くらい:dark, gloomy\n:クラス:class in school\n黒い:くろい:black, dark\n:バス:bus\n青い:あおい:blue\n買い物:かいもの:shopping, purchase\n薬:くすり:drug, medicine\n砂糖:さとう:sugar\n休み:やすみ:holiday, break\n郵便局:ゆうびんきょく:post office\n住所:じゅうしょ:address\n:こちら:here, this way\n財布:さいふ:purse, wallet\n:パスポート:passport\n椅子:いす:chair\n可愛い:かわいい:cute, sweet\nお祖父さん:おじいさん:grandfather\n切手:きって:postage stamp\n涼しい:すずしい:cool of temperature\n:いくつ:how many, how old\n:メニュー:menu\n電気:でんき:electricity, electric light\n勝つ:かつ:win\n負ける:まける:lose\n建てる:たてる:build, erect\n日記:にっき:diary\n売り切れ:うりきれ:sell out\nお巡りさん:おまわりさん:police officer\n目覚まし時計:めざましとけい:alarm clock\n:レシート:receipt (loan word)\n:ティッシュ:tissue\n歯ブラシ:はぶらし:toothbrush\n下りる:おりる:go down, come down\n洗う:あらう:wash\n:パート:part-time\n氏名:しめい:full name\n今夜:こにゃ:tonight, this evening\n夜中:よなか:midnight\n来週:らいしゅう:next week\n誰か:だれか:someone\n今朝:けさ:this morning\n寿司:すし:sushi\n履く:はく:put on shoes, wear pants, skirt\n:おじさん:uncle\n:おばさん:aunt\nお祖母さん:おばあさん:grandmother\n:いとこ:cousin\n辞書:じしょ:dictionary category\n朝ご飯:あさごはん:breakfast\n白:しろ:white\n:どっち:which casual\n:そっち:there casual\n明日:あした:tomorrow\n明後日:みょうごにち/あさって:day after tomorrow\n一昨日:おととい:the day before yesterday\n庭:にわ:garden, yard\n左側:ひだりがわ:left side\n右側:みぎがわ:right side\n指:ゆび:finger, toe\n眼鏡:めがね:glasses\n鞄:かばん:bag, handbag\n:あっち:other side, over there casual\n大人しい:おとなしい:gentle, quiet\n下手:へた:not good at\n厳しい:きびしい:strict, severe\n一人で:ひとりで:by oneself, alone\n答え:こたえ:answer, solution\nこの頃:このごろ:these days, recently\n残念:ざんねん:regretful, disappointing\n仕舞う:しまう:put away, put in\n心配:しんぱい:anxiety, worry\n外:そと:outside, open air\n大切:たいせつ:important, valuable\n:ちょうど:just, exactly\n助ける:たすける:help, save\n勤める:つとめる:serve, hold a job\n連れていく:つれていく:take along, bring along a person\n丈夫:じょうぶ:healthy, sturdy\n賑やか:にぎやか:lively, exciting\n眠い:ねむい:sleepy\n山:やま:mountain\n橋:はし:bridge\n止まる:とまる:come to a stop, cease\n降る:ふる:fall, come down rain, snow, etc.\n本当:ほんとう:reality, genuine\n町:まち:town, city\nお菓子:おかし:sweets, snacks\n緩い:ゆるい:slack, loose\n良い:よい:good /written form\n:ようこそ:welcome greeting\nお土産:おみやげ:souvenir\n両親:りょうしん:parents\n:ウェーター:waiter\n:ウェートレス:waitress\n絶対に:ぜったいに:absolutely, definitely\n:ごちそう:feast, treat\n:フォーク:fork\n:スプーン:spoon\n瓶:びん:bottle\n:つく:be on, be switched on\n醤油:しょうゆ:soy sauce\n茶碗:ちゃわん:rice bowl\n決める:きめる:decide, agree upon\n感じる:かんじる:feel, sense\n生きる:いきる:live one’s life\n動かす:うごかす:move something\n壊れる:こわれる:break, break down\n復習:ふくしゅう:review\n眉:まゆ:eyebrow\n客:きゃく:visitor, customer\n机:つくえ:desk\n風呂:ふろ:bath\n湯:ゆ:hot water\n:ぬるい:tepid, lukewarm\n風邪薬:かぜぐすり:cold medicine\n靴下:くつした:socks\n:たばこ:tobacco, cigarette\n:アイスコーヒー:iced coffee\n天ぷら:てんぷら:Japanese deep-fried food\n肉:にく:flesh, meat\n昨夜:さくや:last night, last evening\n流行る:はやる:be in fashion, be popular\n連れて来る:つれてくる:bring a person\n方:かた:person form\n零:れい:zero\n雲:くも:cloud\n空:そら:sky\n人気:にんき:popularity\n兄さん:にいさん:one’s own older brother\n姉さん:ねえさん:one’s own older sister\n平成:へいせい:Heisei era\n毎月:まいつき:every month\n半日:はんにち:half a day\n半月:はんつき:half a month\n:なるほど:I see, really\n:つまり:in short, that is to say\n:そのまま:as it is, just like that\n:はっきり:clearly\n大変:たいへん:awful, hard\n簡単:かんたん:simple, easy\n似ている:にている:look like, resemble\n驚く:おどろく:be surprised, be startled\n嫌:いや/きらーい:dislike situational\n喧嘩:けんか:fight, argument\n遅れる:おくれる:be late\n:にんじん:carrot\n:ジャガイモ:potato\n:ナス:eggplant\n:やかん:kettle\n話し合う:はなしあう:discuss, talk over\n残す:のこす:leave, leave undone\n:ごちそうする:treat, host a meal\n合う:あう:fit, match\n当たる:あたる:go straight and hit, strike\n集まる:あつまる:gather, be collected\n場所:ばしょ:place, space\n海:うみ:sea, ocean\n少年:しょうねん:boy between and years old\n孫:まご:grandchild\n生徒:せいと:pupil, student\n高校:こうこう:high school for short\n年上:としうえ:older, senior\n卒業:そつぎょう:graduation\n運動:うんどう:movement, exercise\n選手:せんしゅ:athlete, sports player\n映画:えいが:movie\n英語:えいご:English\n手紙:てがみ:letter\n動物:どうぶつ:animal\n音:おと:sound, noise\n海外:かいがい:overseas, abroad\n外国人:がいこくじん:foreigner\n帰国:きこく:return to one’s country\n彼ら:かれら:they\n機械:きかい:machine\n基本:きほん:basics\n今度:こんど:this time, next time\n最後:さいご:last\n最初:さいしょ:first, outset\n準備:じゅんび:preparation, arrangement\n進む:すすむ:advance, move forward\n直接:ちょくせつ:directly\n特に:とくに:specially, particularly\n届く:とどく:reach, be received\n:なぜ:why\n並ぶ:ならぶ:line up, be parallel\n運ぶ:はこぶ:carry, transport\n直す:なおす:repair, fix\n反対:はんたい:oppose, object\n場合:ばあい:situation, case\n詳しい:くわしい:detailed\n:いたずら:mischief, prank\nお祝い:おいわい:celebrate\n:くし:comb\n:こぼれる:spill, overflow\n伝える:つたえる:convey, transmit\n膝:ひざ:knee\n肘:ひじ:elbow\n枕:まくら:pillow\n建物:たてもの:building, structure\n道路:どうろ:road\n四つ角:よつかど:intersection\n曲がり角:まがりかど:corner to turn\n警察:けいさつ:police\n空気:くうき:air, atmosphere\n:スポーツ:sport\n:チャンス:chance\n:クリーニング:dry cleaning\n:サービス:service, on the house\n:グループ:group\n自宅:じたく:one’s house, one’s home\n家庭:かてい:home, family\n期間:きかん:term, period\n年度:ねんど:year, school year\n経験:けいけん:experience, knowledge\n安全:あんぜん:safety, security\n危険:きけん:danger, dangerous\n注意:ちゅうい:attention, care\n成功:せいこう:success\n努力:どりょく:endeavor, effort\n説明:せつめい:explanation, description\n地震:じしん:earthquake\n手術:しゅじゅつ:surgical operation\n火傷:やけど:burn\n課題:かだい:task, assignment\n子:こ:young child, kid\n確認:かくにん:confirmation\n実際:じっさい:reality, actual state\n国際:こくさい:international\n会議:かいぎ:conference, meeting\n提案:ていあん:proposition, proposal\n事務所:じむしょ:office, one’s place of business\n教授:きょうじゅ:professor\n世紀:せいき:century\n:あちこち:all over, here and there\n:そちら:there, that way\n:あちら:over there, that way\n:もし:if, in case of\n:うるさい:noisy, annoying\n固い:かたい:stiff, tight\n深い:ふかい:deep, profound\n面白い:おもしろい:interesting, amusing\n全く:まったく:entirely, truly\n半分:はんぶん:half\n普通:ふつう:normal, regular\n分:ぶん:amount, share\n文化:ぶんか:culture\n毎日:まいにち:every day\n気を付ける:きをつける:be careful about, pay attention to\n守る:まもる:protect, observe\n:もちろん:of course\n:やはり:as expected\n:いくら:how much money\n:よろしく:one’s regards\n:どなた:who\n許す:ゆるす:permit, forgive\n分ける:わける:divide, share\n自然:しぜん:nature, natural\n:アパート:apartment, flat\n:ホテル:hotel\n:パソコン:personal computer\n明るい:あかるい:bright, cheerful\n急ぐ:いそぐ:hurry, do quickly\n歌:うた:song\n中学校:ちゅうがっこう:junior high school\n:テスト:test\n:ポスト:postbox, mailbox\n:ハンカチ:handkerchief\n髪:かみ:hair, hairstyle\n帽子:ぼうし:hat, cap\n被る:かぶる:wear, put on on one’s head\n:ブラウス:blouse\n週末:しゅうまつ:weekend\n先週:せんしゅう:last week\n再来週:さらいしゅう:the week after next\n:いつか:some time, some day\n宿題:しゅくだい:homework\n鍵:かぎ:key, lock\n傘:かさ:umbrella, parasol\n乗り換える:のりかえる:change, transfer\n向かう:むかう:face, head toward\n本屋:ほにゃ:bookstore\nお茶:おちゃ:tea\n改札口:かいさつぐち:ticket gate\n晴れ:はれ:fine weather, clear sky\nバス停:ばすてい:bus stop\n曇り:くもり:cloudy weather\n塩:しお:salt\n:たくさん:a lot, in large quantity\n大嫌い:だいきらい:hate\n中:なか:inside, middle\n二階:にかい:second floor, upstairs\n無くす:なくす:lose, get rid of\n:まあまあ:OK, not bad\n黄色:きいろ:yellow color\n:ランチ:lunch (loan word)\n魚:さかな:fish\n味:あじ:taste, flavor\n:りんご:apple\n:みかん:tangerine\n皿:さら:plate, counter for plates or helpings\n:コーヒー:coffee\n:コップ:cup, glass\n二人:ふたり:two persons\n止む:やむ:stop, cease\n九:きゅう:nine\n昼間:ひるま:daytime, during the day\nいつ頃:いつごろ:about when, about what time\n字:じ:individual character, letter\n七:しち:seven (Chinese origin)\nお釣り:おつり:change of money\n名字:みょうじ:surname, family name\n:おじ:one’s own uncle\n:おば:one’s own aunt\n祖父:そふ:grandfather\n祖母:そぼ:grandmother\n大事:だいじ:importance\n見方:みかた:view, perspective\n鳥:とり:bird, poultry\n犬:いぬ:dog\n返事:へんじ:reply, answer, response\n:また:again, also, or\n年間:ねんかん:period of one year\n青:あお:blue, green\n赤:あか:red color\n信号:しんごう:signal, traffic light\n非常に:ひじょうに:very, extremely\n複雑:ふくざつ:complicated, intricate\n平和:へいわ:peace, harmony\n回る:まわる:turn round, go around\n若者:わかもの:young person, youth\n雪:ゆき:snow, snowfall\n:うまい:sweet, delicious, skillful\n思い出す:おもいだす:recollect, recall\n聞こえる:きこえる:hear, be heard\n借りる:かりる:borrow\n返す:かえす:return, repay\n受け取る:うけとる:receive, get\n捨てる:すてる:discard, abandon\n一緒:いっしょ:together, same\n遊び:あそび:play, amusement\n移す:うつす:move, transfer\n大きさ:おおきさ:size, dimension\n考え:かんがえ:thought, idea\n空港:くうこう:airport for public transportation\n出発:しゅっぱつ:departure, starting\n地図:ちず:map, atlas\n運転:うんてん:drive\n降りる:おりる:get off, land\n:ガス:gas (loan word)\n必ず:かならず:without exception, always\n:カメラ:camera\n通う:かよう:go to and from, frequent a place\n急に:きゅうに:suddenly, unexpectedly\n:サラリーマン:office worker, company employee\n給料:きゅうりょう:salary, pay\n曲:きょく:piece of music\n切れる:きれる:cut well, be sharp\n正しい:ただしい:correct, righteous\n苦しい:くるしい:painful, agonizing\n細かい:こまかい:minute, fine\n静か:しずか:quiet, tranquil\n健康:けんこう:health\n:ゴルフ:golf\n:コース:course, route\n頼む:たのむ:order, ask for\n困る:こまる:be in trouble, not know what to do\n:ずっと:all the time, all through\n例えば:たとえば:for example\n:つもり:intention, purpose\n:しばらく:a little while, a while\n紹介:しょうかい:introduction\n小学校:しょうがっこう:elementary school\n公園:こうえん:park, public garden\n中学:ちゅうがく:junior high\n成績:せいせき:results, grade\n教科書:きょうかしょ:textbook, schoolbook\n席:せき:seat, one’s place\n教室:きょうしつ:classroom, class\n教師:きょうし:teacher, instructor\n試験:しけん:exam\n合格:ごうかく:pass an examination\n数学:すうがく:mathematics\n数字:すうじ:numeric characters\n音楽:おんがく:music\n食事:しょくじ:meal\n壁:かべ:wall, partition\n信じる:しんじる:believe, trust\n育てる:そだてる:bring up, raise\n倒れる:たおれる:fall over\n落とす:おとす:drop\n代わる:かわる:substitute, be substituted for\n:タクシー:taxi\n確か:たしか:for sure, for certain\n立てる:たてる:stand, set up\n中学生:ちゅうがくせい:junior high school student\n売れる:うれる:sell, be in demand\n着く:つく:arrive at, reach\n決まる:きまる:be decided\n飾る:かざる:decorate\n殺す:ころす:kill\n下げる:さげる:lower, turn down\n贈る:おくる:offer, give\n訪ねる:たずねる:visit, go to see\n打つ:うつ:hit, strike\n相談:そうだん:consultation, advice\n玄関:げんかん:entrance, door\n兄弟:きょうだい:sibling\n長男:ちょうなん:eldest son\n高さ:たかさ:height\n用:よう:things to do\n時代:じだい:age, era\n位置:いち:position, location\n季節:きせつ:season\n穴:あな:hole\n裏:うら:the back, the reverse side\n島:しま:island (Japanese origin)\n海岸:かいがん:seashore, coast\n:ガラス:glass material\n風:かぜ:wind\n科学:かがく:science\n太陽:たいよう:sun\n台風:たいふう:typhoon\n北:きた:north\n馬:うま:horse\n牛肉:ぎゅうにく:beef\n雑誌:ざっし:magazine, journal\n小説:しょうせつ:novel\n大使館:たいしかん:embassy\n故障:こしょう:malfunction, breakdown\n温度:おんど:temperature\n何か:なにか:something, some\n向こう:むこう:over there, on the other side\n真ん中:まんなか:center, middle casual\n遠く:とおく:far away, at a distance\n横:よこ:side, width across\n:つまらない:boring, dull\n素晴らしい:すばらしい:excellent, wonderful\n毎年:まいとし/まいねん:every year\n来月:らいげつ:next month\n日時:にちじ:date and time\n夕方:ゆうがた:early evening, at dusk\n通る:とおる:pass, go through\n自動車:じどうしゃ:automobile\n慣れる:なれる:grow accustomed to, get used to\n撮る:とる:take a photograph, film\n:やっと:at last, finally\n:どんどん:knock, bang\n並べる:ならべる:line up, arrange\n逃げる:にげる:escape, run away\n渡す:わたす:hand over, give\n値段:ねだん:price\n両方:りょうほう:both\n約束:やくそく:promise, vow\n一部:いちぶ:part\n:ラジオ:radio\n入院:にゅういん:be hospitalized\n:ニュース:news\n旅行:りょこう:travel, trip\n用意:ようい:preparation\n伸びる:のびる:stretch, grow\n:パーティー:party\n:ビール:beer\n早く:はやく:early, soon\n番組:ばんぐみ:program\n:ビデオ:video\n増やす:ふやす:increase\n振る:ふる:wave, shake\n迎える:むかえる:welcome, receive a visitor\n無理:むり:unreasonable, impossible\n珍しい:めずらしい:rare, scarce\n有名:ゆうめい:famous\n喜ぶ:よろこぶ:be happy, be delighted\n留学:りゅうがく:study abroad\n料理:りょうり:cooking\n野菜:やさい:vegetable\n分かれる:わかれる:be divided, split off\n特別:とくべつ:special\n理由:りゆう:reason, excuse\n自由:じゆう:freedom\n方向:ほうこう:direction, course\n残る:のこる:remain, be left over\n:ビル:building\n:まとめる:gather together, put in order\n流れる:ながれる:flow, run\n:セーター:sweater\n:シャツ:shirt\n洗濯:せんたく:laundry, washing\n間違える:まちがえる:make a mistake, fail at\n:アイスクリーム:ice cream\n乾く:かわく:become dry\n冷める:さめる:cool off\n色々:いろいろ:a variety of\n持って行く:もっていく:take, bring\n着替える:きがえる:change clothes\n石鹸:せっけん:soap\n野球:やきゅう:baseball\n昼食:ちゅうしょく:lunch\n朝食:ちょうしょく:breakfast\n眠る:ねむる:sleep, lie idle\n初め:はじめ:beginning\n火:ひ:fire, flame\n西:にし:west, western\n東:ひがし:east, eastern\n南:みなみ:south\n夕食:ゆうしょく:supper, dinner\n:なかなか:rather, pretty\n励ます:はげます:encourage, cheer up\n涙:なみだ:tear\n夢:ゆめ:dream\n職場:しょくば:place of work, office\n隣:となり:next to, next door\n:マンション:apartment, residential building\n:エレベーター:elevator\n窓:まど:window\n押す:おす:push, press down\n入学:にゅうがく:enter a school, matriculate\n戸:と:door, sliding door\n通り:とおり:street, road\n亡くなる:なくんある:die, pass away\n夫婦:ふうふ:husband and wife, married couple\n女性:じょせい:woman, female\n森:もり:forest\n:トラック:truck\n:レコード:record\n熱:ねつ:heat, fever\n:ページ:page\n踊る:おどる:dance\n長さ:ながさ:length\n厚さ:あつさ:thickness\n秘密:ひみつ:secret, privacy\n";function o(e,n){return new Promise((t=>{n.onComplete=t,e.tweens.add(n)}))}let h=[];function l(){0===h.length&&(h=function(){const e=a.split("\n"),n=[];for(const t of e){const[e,s,r]=t.split(":");n.push({id:`${e}:${s}`,english:r,kanji:e,hiragana:s})}return n}())}class c{constructor(e){n(this,"level",1),n(this,"learningWords",[]),n(this,"buttonWords",[]),n(this,"nextQuestionIndex",0),n(this,"correctWordIndex",0),n(this,"corrects",0),n(this,"mistakes",0),this.level=e||1,l();const t=Math.floor(h.length/48),s=(e-1)*t;if(this.learningWords=h.slice(s,s+t),function(e){for(var n,t=e.length;0!==t;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]]}(this.learningWords),this.learningWords.length<=3)throw new Error("popNextWord will have an infinite loop");this.fillButtonWords()}popNextWord(){let e;for(;e=this.learningWords[this.nextQuestionIndex],this.nextQuestionIndex++,this.nextQuestionIndex>=this.learningWords.length&&(this.nextQuestionIndex=0),this.buttonWords.indexOf(e)>=0;);return this.correctWordIndex=Math.floor(Math.random()*this.buttonWords.length),e}fillButtonWords(){for(;this.buttonWords.length<3;){const e=this.popNextWord();this.buttonWords.push(e)}}getAnswerWord(){return this.buttonWords[this.correctWordIndex]}remainingWords(){return this.learningWords.length-this.corrects}totalWords(){return this.learningWords.length}tryAnswer(e){if(e===this.correctWordIndex){this.corrects++;const n=this.popNextWord();this.buttonWords[e]=n;let t=!1;return this.remainingWords()<=0&&(t=!0),this.fillButtonWords(),{success:!0,gameOver:t}}return this.mistakes++,{success:!1,gameOver:!1}}score(){return this.corrects-this.mistakes}}function d(e){return"best-speed-"+e}const p={bestSpeed:{get(e){const n=localStorage.getItem(d(e));return n?+n:void 0},set(e,n){localStorage.setItem(d(e),n.toString())}}};class u extends Phaser.Scene{constructor(){super({key:"MenuScene"}),n(this,"startKey"),n(this,"background",new r),n(this,"stuff",[this.background]),n(this,"buttons")}preload(){this.stuff.map((e=>e.preload(this))),this.startKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.startKey.isDown=!1,this.load.image("particle","./assets/particle.302dcde6.png"),this.load.audio("gasp",t)}create(){this.buttons=[],this.stuff.map((e=>e.create(this)));this.add.text(540,64,"Nihongo Shooter",{fontSize:"96px",fontFamily:"Helvetica",align:"center"}).setOrigin(.5);for(let e=0;e<48;e++){const n=e+1,t=new i(this);t.width=124.2,p.bestSpeed.get(n)&&t.setRestColor(10083737),this.buttons.push(t),t.setText(""+n);const s=1080*(1.5+e%6*1.4)/10,r=1920*(1.5+1*Math.floor(e/6))/10;t.setXY(s,r),t.onPress=()=>{this.sound.play("gasp"),this.scene.start("GameScene",{level:n})}}}update(){this.stuff.map((e=>{e.update&&e.update(this)})),this.startKey.isDown}}class m{constructor(){n(this,"rays"),n(this,"container")}preload(e){e.load.spritesheet("rays-sheet","./assets/rays.f5dead39.png",{frameWidth:64,frameHeight:224,margin:0,spacing:0})}create(e){e.anims.create({key:"rays-charging",frames:e.anims.generateFrameNumbers("rays-sheet",{frames:[0,1,2,3,4]}),frameRate:15,repeat:-1}),e.anims.create({key:"rays-fire",frames:e.anims.generateFrameNumbers("rays-sheet",{frames:[4,8,9,10]}),frameRate:15,repeat:0,hideOnComplete:!0}),this.rays=[e.add.sprite(0,100,"rays"),e.add.sprite(0,230,"rays"),e.add.sprite(0,428,"rays")],this.container=e.add.container(0,0,this.rays),this.container.scale=3.2,this.container.setDepth(5),this.rays.map((e=>{e.setRotation(Math.PI),e.setVisible(!1)}))}setX(e){this.container.x=e}fire(){this.rays.map((e=>{e.setVisible(!0)})),this.rays.map((e=>e.play("rays-fire")))}fireBlocked(){this.rays.map((e=>e.setVisible(!0))),this.rays[0].setVisible(!1),this.rays[1].setVisible(!1),this.rays.map((e=>e.play("rays-fire")))}}const g="explosion-sheet",f="boom",y="shield";class b{constructor(){n(this,"sprite"),n(this,"text"),n(this,"scene")}preload(e){this.scene=e,e.load.spritesheet(g,"./assets/explosion.89d24dce.png",{frameWidth:32,frameHeight:32,margin:0,spacing:0})}create(e){e.anims.create({key:f,frames:e.anims.generateFrameNumbers(g,{start:0,end:7}),frameRate:20,repeat:0,hideOnComplete:!0}),e.anims.create({key:y,frames:e.anims.generateFrameNumbers(g,{frames:[3,6,7]}),frameRate:15,repeat:0,hideOnComplete:!0}),this.sprite=e.add.sprite(100,100,f),this.sprite.scale=9,this.sprite.alpha=.8,this.sprite.setVisible(!1),this.sprite.depth=20,this.text=e.add.text(0,0,"違"),this.text.setFontSize(1920*.12),this.text.setAlign("center"),this.text.setOrigin(.5),this.text.setColor("#6666ff"),this.text.depth=20,this.text.setVisible(!1)}shield(){this.text.setVisible(!0),this.text.scale=1,this.text.alpha=1,o(this.scene,{targets:this.text,scale:2,alpha:0,duration:300})}fire(){this.sprite.setVisible(!0),this.sprite.clearTint(),this.sprite.play(f)}setXY(e,n){this.sprite.x=e,this.sprite.y=n,this.text.x=e,this.text.y=n}}class w extends Phaser.Scene{constructor(){super({key:"LevelDoneScene"}),n(this,"levelDoneData"),n(this,"background",new r),n(this,"buttons"),n(this,"stuff",[this.background])}init(e){console.log("props",e),this.levelDoneData=e}preload(){this.stuff.map((e=>e.preload(this))),this.load.audio("gasp",t)}create(){this.buttons=[],this.stuff.map((e=>e.create(this)));const e=`LEVEL ${this.levelDoneData.level}`,n=this.add.text(540,96,e,{fontSize:.06*1920+"px",fontFamily:"Helvetica",align:"center"});n.setOrigin(.5);const t=["Hits: "+this.levelDoneData.corrects,"Misses: "+this.levelDoneData.mistakes,`In: ${this.levelDoneData.duration} seconds`],s=p.bestSpeed.get(this.levelDoneData.level);let r=!1;0==this.levelDoneData.mistakes&&(!s||s&&this.levelDoneData.duration<s)&&(p.bestSpeed.set(this.levelDoneData.level,this.levelDoneData.duration),r=!0),r?t.push("New best speed!"):s?t.push(`Best: ${s} seconds`):t.push("Get zero misses\nto beat the level");for(const[i,o]of t.entries())this.add.text(135,1920*(20+7*i)/100,o,{fontSize:"76.8px",fontFamily:"Helvetica"}),n.setOrigin(.5);const a=new i(this);this.buttons.push(a),a.setText("COOL"),a.setXY(this.game.scale.width/2,.8*this.game.scale.height),a.onPress=()=>{this.scene.start("MenuScene")}}update(){this.stuff.map((e=>{e.update&&e.update(this)}))}}class v{constructor(){n(this,"rect")}preload(e){}create(e){this.rect=e.add.rectangle(0,0,1080,1920*.03),this.rect.setOrigin(0,0),this.rect.setFillStyle(13369344),this.rect.depth=10}setPercent(e){this.rect.displayWidth=1080*e/100}}const k="enemies-sheet",x="agreen",W="ablue",T="ared";class S{constructor(){n(this,"sprite")}preload(e){e.load.spritesheet(k,"./assets/enemies.75c6c4b6.png",{frameWidth:48,frameHeight:48,margin:0,spacing:0})}create(e){e.anims.create({key:x,frames:e.anims.generateFrameNumbers(k,{start:0,end:4}),frameRate:1,repeat:-1}),e.anims.create({key:W,frames:e.anims.generateFrameNumbers(k,{start:5,end:8}),frameRate:1,repeat:-1}),e.anims.create({key:T,frames:e.anims.generateFrameNumbers(k,{start:10,end:13}),frameRate:1,repeat:-1}),this.sprite=e.add.sprite(300,300,x),this.sprite.scale=27,this.sprite.play(x),this.sprite.depth=1,o(e,{targets:this.sprite,x:"+=540",duration:8e3,repeat:-1,yoyo:!0}),o(e,{targets:this.sprite,y:"+=192",duration:4500,repeat:-1,yoyo:!0})}chooseEnemy(e){const n=[x,W,T];this.sprite.play(n[e%n.length])}setXY(e,n){this.sprite.x=e,this.sprite.y=n}}const D="explosion2-sheet",P="boom2";class I{constructor(){n(this,"sprites")}preload(e){e.load.spritesheet(D,"./assets/explosion2.ea4ac2f3.png",{frameWidth:80,frameHeight:80,margin:0,spacing:0})}create(e){this.sprites=[],e.anims.create({key:P,frames:e.anims.generateFrameNumbers(D,{start:0,end:6}),frameRate:20,repeat:2,hideOnComplete:!0});for(let n=0;n<10;n++){const n=e.add.sprite(0,0,P);this.sprites.push(n),n.scale=9,n.alpha=.8,n.x=1080*Math.random(),n.y=1920*Math.random()*.5,n.setVisible(!1),n.depth=20}}async fire(){const e=[];for(const n of this.sprites){const t=(async()=>{var e;await(e=1e3*Math.random(),new Promise((n=>setTimeout(n,e)))),n.setVisible(!0),n.play(P)})();e.push(t)}return Promise.all(e)}}const{LEFT:O,RIGHT:B,UP:G,ONE:C,TWO:F,THREE:R}=Phaser.Input.Keyboard.KeyCodes,M={left:O,right:B,up:G,one:C,two:F,three:R};class H extends Phaser.Scene{constructor(){super({key:"GameScene"}),n(this,"level",1),n(this,"ship"),n(this,"buttons"),n(this,"definitionBox"),n(this,"wordsGame"),n(this,"scoreText"),n(this,"rays",new m),n(this,"explosion",new b),n(this,"manyExplosions",new I),n(this,"background",new r),n(this,"hpBar",new v),n(this,"enemy",new S),n(this,"stuff",[this.rays,this.explosion,this.background,this.hpBar,this.enemy,this.manyExplosions]),n(this,"startTime"),n(this,"isGameOver",!1),n(this,"keys")}init(e){this.level=e.level||1,this.startTime=Date.now()}preload(){console.log("level",this.level),this.stuff.map((e=>e.preload(this))),this.wordsGame=new c(this.level),this.buttons=[],this.isGameOver=!1,this.load.spritesheet("ship-sheet","./assets/ship-01.02fb062b.png",{frameWidth:48,frameHeight:48,margin:0,spacing:0}),this.load.spritesheet("ship-thrust-sheet","./assets/ship-01-thrust.25de50ff.png",{frameWidth:16,frameHeight:10,margin:0,spacing:0}),this.load.audio("gasp",t)}create(){this.stuff.map((e=>e.create(this)));for(const t of this.wordsGame.buttonWords){const e=new i(this);this.buttons.push(e)}this.definitionBox=new i(this),this.definitionBox.setXY(this.game.scale.width/2,.3*this.game.scale.height),this.scoreText=this.add.text(0,0,"HP: 100",{fontSize:"57.6px",fontFamily:"Helvetica"}),this.scoreText.depth=11,this.enemy.chooseEnemy(this.level),this.updateWordButtons(),this.anims.create({key:"player-idle",frames:this.anims.generateFrameNumbers("ship-sheet",{frames:[0,1,0,3,4,0]}),frameRate:5,repeat:-1});const e=this.add.sprite(0,0,"ship");e.play("player-idle"),this.anims.create({key:"thrust-idle",frames:this.anims.generateFrameNumbers("ship-thrust-sheet",{frames:[0,1]}),frameRate:4,repeat:-1});const n=this.add.sprite(0,20,"ship-thrust");n.play("thrust-idle"),this.ship=this.add.container(0,0,[e,n]),this.ship.x=540,this.ship.y=1651.2,this.ship.scale=3.2,this.keys=this.input.keyboard.addKeys(M)}update(){this.isGameOver||(this.stuff.map((e=>{e.update&&e.update(this)})),(Phaser.Input.Keyboard.JustDown(this.keys.left)||Phaser.Input.Keyboard.JustDown(this.keys.one))&&this.guessAnswer(0),(Phaser.Input.Keyboard.JustDown(this.keys.up)||Phaser.Input.Keyboard.JustDown(this.keys.two))&&this.guessAnswer(1),(Phaser.Input.Keyboard.JustDown(this.keys.right)||Phaser.Input.Keyboard.JustDown(this.keys.three))&&this.guessAnswer(2))}enemyX(e){const n=this.game.scale.width;return[.25*n,.5*n,.75*n][e]}enemyY(e){return 1920*(57+e%2*14)/100}async guessAnswer(e){if(this.isGameOver)return;const n=this.wordsGame.tryAnswer(e);if(this.ship.setX(this.enemyX(e)),this.rays.setX(this.enemyX(e)),this.explosion.setXY(this.enemyX(e),this.enemyY(e)),n.success?(this.rays.fire(),this.explosion.fire()):(this.rays.fireBlocked(),this.explosion.shield()),n.gameOver){this.isGameOver=!0;const e={duration:(Date.now()-this.startTime)/1e3,mistakes:this.wordsGame.mistakes,corrects:this.wordsGame.corrects,level:this.level};console.log("level over",e);try{await this.manyExplosions.fire()}catch(t){console.warn("strange error",t)}this.scene.start("LevelDoneScene",e)}else this.updateWordButtons()}updateWordButtons(){for(const[t,s]of this.wordsGame.buttonWords.entries()){const e=this.buttons[t];e.setText(s.kanji+"\n"+s.hiragana),e.setXY(this.enemyX(t),this.enemyY(t)),e.onPress=()=>{console.log("press",t,s.id),this.guessAnswer(t)}}const e=this.wordsGame.getAnswerWord();this.definitionBox.setText(e.english);const n=100*this.wordsGame.remainingWords()/this.wordsGame.totalWords();this.hpBar.setPercent(n),this.scoreText.setText("HP: "+10*this.wordsGame.remainingWords())}}const N={title:"Nihongo Shooter",url:"https://github.com/ubershmekel/nihongo-shooter",version:"2.0",width:1080,height:1920,type:Phaser.AUTO,parent:"app",scene:[u,H,w],input:{keyboard:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},backgroundColor:"#000020",render:{pixelArt:!1,antialias:!0},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,fullscreenTarget:"app",expandParent:!1}};class K extends Phaser.Game{constructor(e){super(e)}}window.toggleFullscreen=()=>{var e;document.exitFullscreen?window._game.scale.toggleFullscreen():null==(e=document.getElementById("app"))||e.scrollIntoView()},window.addEventListener("load",(()=>{window._game=new K(N)}));
