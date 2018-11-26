// import {data} from './data.js' 
$(".cloud").velocity(
        { 
          // 'background-position': '100% 0%'
          'left':'-309vw'
        },
        { 
          duration: 10000,
          loop:true
        }
    );

    var picsCount = 1;
    var pics = ["../public/img/answer_allopen_bg.png","../public/img/answer_bg.png","../public/img/answer_cat.png","../public/img/answer_correct.png","../public/img/answer_failed_bg.png","../public/img/answer_rui.png","../public/img/answer_success_bg.png","../public/img/answer_wen.png","../public/img/answer_wrong.png","../public/img/answer_zhi.png","../public/img/answer_zhong.png","../public/img/choose_bg.png","../public/img/choose_boy.png","../public/img/choose_girl.png","../public/img/cover_bg.png","../public/img/cover_clou1.png","../public/img/cover_clou2.png","../public/img/cover_clou3.png","../public/img/cover_clou4.png","../public/img/cover_text.png","../public/img/home/","../public/img/leaf1.png","../public/img/leaf2.png","../public/img/leaf3.png","../public/img/loading_bg.png","../public/img/loading_cloud.png","../public/img/mainscene_bg.png","../public/img/mainscene_rui.png","../public/img/mainscene_rui_bi.png","../public/img/mainscene_table.png","../public/img/mainscene_tips1.png","../public/img/mainscene_tips2.png","../public/img/mainscene_tips3.png","../public/img/mainscene_tips4.png","../public/img/mainscene_upgrade.png","../public/img/mainscene_wen.png","../public/img/mainscene_wen_zhi.png","../public/img/mainscene_xing.png","../public/img/mainscene_xing_cat.png","../public/img/mainscene_zhi.png","../public/img/mainscene_zhi_hua.png","../public/img/mainscene_zhong.png","../public/img/mainscene_zhong_bian.png","../public/img/me_bottom.png","../public/img/me_close.png","../public/img/memorial_1.png","../public/img/memorial_2.png","../public/img/memorial_3.png","../public/img/memorial_4.png","../public/img/memorial_bg.png","../public/img/memorial_up_btn.png","../public/img/ms_chakanzouzhang.png","../public/img/ms_guifei.png","../public/img/ms_huangdi.png","../public/img/ms_nvwang.png","../public/img/ms_taijian.png","../public/img/ms_xianling.png","../public/img/ms_xiaojie.png","../public/img/ms_xiaozhu.png","../public/img/ms_yatou.png","../public/img/ms_yayi.png","../public/img/ms_zaixiang.png","../public/img/pop_renwu_bg.png","../public/img/share.jpg","../public/img/share.png","../public/img/share_btn.png","../public/img/upgrade_btn.png"];

    for(var i = 0;i < pics.length;i++){
        var img = new Image();
        img.src = pics[i];
        img.onload = function(){
            picsCount++;
            var percent = Math.floor(picsCount/pics.length*100);
            $('.percent').text(percent + '%');
            if(percent == 100){
                setTimeout(function(){
                $('.loading').hide();
                $('.item-wrap').show();
                $('.cover-text').addClass('cover-text-am');
                var timer = setTimeout(function(){$('.cover').hide();$('.choose').show();},1);
                },1)
            }
        }
    }

    function pageMove($li){
        var index = $li.index();
        $li.next().show().closest('ul').css({'transform':'translateY('+-$(window).height()*index+'px)'});
    }

    $('.choose,.main').on('click','.move',function(){
        var $li = $(this).closest('li');
        pageMove($li);
        //判断性别
        if ($li.attr("class") == "choose") {
            var attrIndex = $(this).attr("class").indexOf(" ");
            sexName = $(this).attr("class").slice(0,attrIndex);
            $('.person').css({"background":'url(../assets/img/ms_' + data['sex'][sexName][0] + '.png) no-repeat 4px 0/cover'});
        }
    });

    var data = {
        tools:{
            zhong:[
                {
                    question:'1、如果《大家》的文章每被阅读一次，就给你一元钱，你现在是个什么级别的富人？',
                    options:{
                        A:'A、亿万富翁',
                        B:'B、百万富翁',
                        C:'C、穷光蛋'
                    },
                    correct:'A'
                },
                {
                    question:'2、以下哪一组人名都是《大家》作者？',
                    options:{
                        A:'A、闫黄、红佟佟、小绿桑',
                        B:'B、闫绿、黄佟佟、小红桑',
                        C:'C、闫红、黄佟佟、小绿桑'
                    },
                    correct:'C'
                },
                {
                    question:'3、以下哪一个观点是《大家》没推荐过的？',
                    options:{
                        A:'A、中国人至少还要忍受30年雾霾',
                        B:'B、雾霾越严重，越要发展大城市',
                        C:'C、雾霾是工业污染的产物'
                    },
                    correct:'C'
                }
            ],
            zhi:[
                {
                    question:'1、NASH是什么？',
                    options:{
                        A:'A、一个数学家的名字',
                        B:'B、几个对博弈论最有贡献的人的名字合写',
                        C:'C、A+B'
                    },
                    correct:'C'
                },
                {
                    question:'2、以下哪条内容是可信的？',
                    options:{
                        A:'A、吃碘盐可以预防核辐射',
                        B:'B、白壳鸡蛋更有营养',
                        C:'C、早上身高比晚上更高一些'
                    },
                    correct:'C'
                },
                {
                    question:'3、某编辑一月约稿量超量50%，二月约稿量上升了50%，三月放松警惕，业绩下滑50%，请回答：第三个月编辑约稿量考核如何？',
                    options:{
                        A:'A、高于要求水平，超过很多(50%以上)',
                        B:'B、高于要求水平，超过一点(50%以下)',
                        C:'C、低于要求水平，差一点点(50%以下)'
                    },
                    correct:'B'
                }
            ],
            wen:[
                {
                    question:'1、以下文章标题，哪个被读者点击次数更多？',
                    options:{
                        A:'A、《这世上唯一能让窦唯潦倒的人》',
                        B:'B、《你无法证明自己不是人渣》',
                        C:'C、《崔永元用诡辩“战胜”科学》'
                    },
                    correct:'A'
                },
                {
                    question:'2、以下文章，哪个被转发次数更多？',
                    options:{
                        A:'A、《留美需要多长时间的准备？》',
                        B:'B、《今日何人才配做我们的老师》',
                        C:'C、《父子之间，很多话不知如何开口》'
                    },
                    correct:'A'
                },
                {
                    question:'3、郭靖为什么能追到黄蓉？',
                    options:{
                        A:'A、因为郭靖土豪',
                        B:'B、因为郭靖豪爽、大气不滥情',
                        C:'C、因为郭靖是蒙古高官'
                    },
                    correct:'B'
                }
            ],
            xing:[
                {
                    question:'1、根据《大家》作者的观点，以下哪个是错误的？',
                    options:{
                        A:'A、《红楼梦》里面贾瑞勾引王熙凤是因为他觉得“已婚女人很寂寞”',
                        B:'B、名人公布恋情时，获利的首先是借机打广告的企业',
                        C:'C、同性结婚在美国是违法的'
                    },
                    correct:'C'
                },
                {
                    question:'2、关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过？',
                    options:{
                        A:'A、黄圣依和杨子的关系可能一直会是一个谜',
                        B:'B、黄圣依和杨子很般配',
                        C:'C、杨子并非为了孩子而承认和黄圣依的关系'
                    },
                    correct:'B'
                },
                {
                    question:'3、以下哪条不是大家作者发表过的婚姻观',
                    options:{
                        A:'A、不要结婚',
                        B:'B、婚姻很昂贵',
                        C:'C、婚姻不该用“狠”来维持'
                    },
                    correct:'A'
                }
            ],
            rui:[
                {
                    question:'1、以下电视剧女主角谁更“玛丽苏”？',
                    options:{
                        A:'A、花千骨',
                        B:'B、何以笙箫默',
                        C:'C、武媚娘传奇'
                    },
                    correct:'A'
                },
                {
                    question:'2、2015年上半年以下哪个明星的情感问题没有在《大家》栏目中被提到？',
                    options:{
                        A:'A、黄圣依',
                        B:'B、古天乐',
                        C:'C、刘翔'
                    },
                    correct:'B'
                },
                {
                    question:'3、以下关于日本的描述哪一条是不对的？',
                    options:{
                        A:'A、大多数日本人整容是为了让自己变得更普通',
                        B:'B、大多数日本人不知道天皇是做什么的',
                        C:'C、大多数日本人不喜欢吃日本料理'
                    },
                    correct:'C'
                }
            ],
            character:[
                {
                    question:'1：《大家》目前有一位主编的名字叫做“jiajia”，请问对应的中文是哪两个字？',
                    options:{
                        A:'A、贾佳',
                        B:'B、贾葭',
                        C:'C、贾嘉'
                    },
                    correct:'C'
                },
                {
                    question:'2：填空题，下面句子中应该填入哪个词组：《大家》女编辑都是__常给大家带来欢乐',
                    options:{
                        A:'A、女神经',
                        B:'B、女神，经',
                        C:'C、女，神经'
                    },
                    correct:'B'
                },
                {
                    question:'3：以下哪一位不是《大家》作者',
                    options:{
                        A:'A、刘波',
                        B:'B、刘洪',
                        C:'C、刘海'
                    },
                    correct:'C'
                },
                {
                    question:'4：以下哪一组《大家》作者都是女的？',
                    options:{
                        A:'A、唐映红、席越、师北宸、小绿桑',
                        B:'B、席越、易小荷、陈思呈、侯虹斌',
                        C:'C、朱天衣、云也退、毛利、唐映红'
                    },
                    correct:'B'
                },
                {
                    question:'5：《大家》特别的牛的作者王欣，他的每一篇文章在微信客户端阅读量都超过10万，他的网名叫什么？',
                    options:{
                        A:'A、反内裤阵地',
                        B:'B、反裤衩阵地',
                        C:'C、反优衣库阵地'
                    },
                    correct:'B'
                },
                {
                    question:'6：杨早老师曾在一篇文章中预测过100年后，中国三位文学家会被称为“自贡三杰”，请问这三杰都是谁？',
                    options:{
                        A:'A、易小荷、李静睿、恐龙化石',
                        B:'B、郭敬明、饶雪漫、周小平',
                        C:'C、郭敬明、冷吃兔、饶雪漫'
                    },
                    correct:'B'
                },
                {
                    question:'7：《大家》作者毛利曾点评：“一部热衷讲道理的电影，打斗再精彩，演员再好看，所有人都恨不得快点结束。”她在说哪部片子：',
                    options:{
                        A:'A、大圣归来',
                        B:'B、道士下山',
                        C:'C、聂隐娘'
                    },
                    correct:'B'
                },

                {
                    question:'8：《大家书架》每天推荐一本“你不看就OUT了”的好书，请问以下哪本书没有在这个栏目里推荐过的：',
                    options:{
                        A:'A、《拉布拉多鸭的诅咒》',
                        B:'B、《没有女人的男人们》',
                        C:'C、《三生三世 十里桃花》'
                    },
                    correct:'C'
                },
                {
                    question:'9：《大家》编辑金凤每天白天要写400字的文章，晚上，她会删掉300个字，问：金凤写一篇1000字的文章要多少天？',
                    options:{
                        A:'A、10天',
                        B:'B、8天',
                        C:'C、7天'
                    },
                    correct:'C'
                },
                {
                    question:'10：小远和刀哥约见作者，距离为10，小远步速2，作者3，刀哥4，刀哥遇作者后回头，遇小远后又回头，如此反复，问：三人相遇时，刀哥共走多远？',
                    options:{
                        A:'A、10公里',
                        B:'B、8公里',
                        C:'C、7公里'
                    },
                    correct:'B'
                }          
            ]
        },
        sex:{
            boy:['taijian','yayi','xianling','zaixiang','huangdi','太监','衙役','县令','宰相','皇帝'],
            girl:['yatou','xiaojie','xiaozhu','guifei','nvwang','丫头','小姐','小主','贵妃','皇后']
        }
    };

    $('.tools').on('click',function(){
        correctCount = 0;
        $t = $(this);
        if ($t.data('lock')) {
            return 0;
        }

        //初始化答题变量
        correctCount = 0;
        wrongCount = 0;
        var $li = $t.closest('li');
        Csstools = $t.data('tools');
        var attrIndex = $t.attr("class").indexOf(" ");
        toolsName = $t.attr("class").slice(0,attrIndex);
        questionLength = data.tools[toolsName].length;
        questionCount = 0;

        newdata = data['tools'][Csstools][0];
        init_data(newdata);
        pageMove($li);
    })

    var mapOpt = {0:'A',1:'B',2:'C'};
    function init_data(newdata){
        $('.answer-box .title').text(newdata.question);
        $('.answer-box .opt span').each(function(index,item){
            $(item).text(newdata.options[mapOpt[index]]);
            $(item).closest('.opt').data('opt',mapOpt[index]);
        });
        $('.answer-box').data("correct",newdata.correct);
    }

    
    //判断答案对错
    function correct_wrong($this){
        //答题正确正确
        if ($('.answer-box').data("correct") == $this.data('opt')) {
            $('.opt').removeClass('current');
            correctCount++;
            $('.animation-correct',$this).velocity('fadeIn',{complete:function(){  //提勾图片的弹入
                                                            setTimeout(function(){
                                                                $('.animation-correct').velocity('fadeOut',{complete:function(){
                                                                    questionCount++;
                                                                    var newdata = data['tools'][Csstools][questionCount];
                                                                    init_data(newdata);    //渲染下一道题目
                                                                }
                                                            });
                                                            },1000)
                                                        }
                                                    });
        }
        //答题错误
        else {
            wrongCount++;
            $('.animation-wrong',$this).velocity('fadeIn',{complete:function(){ //交叉图片的弹入
                                                                            setTimeout(function(){
                                                                                $('.animation-wrong').velocity('fadeOut',{complete:function(){
                                                                                                 questionCount++;
                                                                                                 var newdata = data['tools'][Csstools][questionCount];
                                                                                                 init_data(newdata);     //渲染下一道题目
                                                                                                 $('.opt').removeClass('current');
                                                                                               }
                                                                                    });
                                                                            },1000);
                                                                        }
                                                            }
                                                  );
        }
    }
    
    //判断答完全部题目之后的对错情况
    function result($this){
        if (questionLength == 10) {
            var person = 'taijian';
            var character = Math.floor(correctCount/2);
            sex1 = data['sex'][sexName];
            switch(character){
                case 1: person = sex1[0];break;
                case 2: person = sex1[1];break;
                case 3: person = sex1[2];break;
                case 4: person = sex1[3];break;
                case 5: person = sex1[4];break;
            }
            $('.person').css({"background":'url(../assets/img/ms_' + person + '.png) no-repeat 4px 0/cover'});
            $('.renwu').velocity('fadeIn',{complete: function(){
                setTimeout(function(){
                    $('.renwu .title').text('答对' + correctCount + '题');
                    $('.result-wp .result-flag').text(sex1[4+character]);
                    $('.renwu').show();
                    setTimeout(function(){
                        $('ul').css({'transform':'translateY('+-$(window).height()+'px)'});
                        $('.renwu').hide();
                    },1500)
                },1000);
            }
        });
            return 0;
        }
        if (correctCount >= 2 ) {
                        $('.tips_success').velocity('fadeIn',{complete:function(){
                                    setTimeout(function(){
                                    $('ul').css({'transform':'translateY('+-$(window).height()+'px)'})
                                    $('.tips_success,.animation-correct').hide();
                                },1000);
                                $t.data('lock',1).addClass('light');
                                //主页面显示答对后的物品
                                var tools_name = toolsName + '_tools';
                                $('.' + tools_name).show();                        
                            }
                        });
        }
        else {
                $('.tips_fail').velocity('fadeIn',{complete:function(){
                    setTimeout(function(){
                        $('ul').css({'transform':'translateY('+-$(window).height()+'px)'});
                        $('.tips_fail,.animation-wrong').hide();
                            },1000); 
                        }
                    });
            }
    }

    $('.answer-box .opt').on('click',function(){
        $(this).addClass('current');
        correct_wrong($(this));
        if (questionCount == questionLength - 1) {
            questionCount = 0;
            result($(this));
            wrongCount = 0;
            
        }
    });