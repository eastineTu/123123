<template>
    <div class="all-question">
        <div class="mogol"/>
        <div class="all-question-info">
            <div class="question-info" v-if="isQuestion">
                <img class="question-people" src="../assets/question_people.png"/>
                <div class="title-name"> 神雕侠侣</div>
                <img class="progress" :src="imgList[questionIndex].imgSrc"/>
                <div class="question-message" v-html="questions[questionIndex].questionInfo"></div>
                <div class="select-input" v-if="questionIndex < 4">
                    <label><input name="Fruit" type="radio"
                                  value="A"/>A:{{questions[questionIndex].selectA}}</label><br>
                    <label><input name="Fruit" type="radio"
                                  value="B"/>B:{{questions[questionIndex].selectB}}</label><br>
                    <label><input name="Fruit" type="radio"
                                  value="C"/>C:{{questions[questionIndex].selectC}}</label><br>
                    <label><input name="Fruit" type="radio" value="D"/>D:{{questions[questionIndex].selectD}}</label>
                </div>
                <div class="select-input" v-if="questionIndex >= 4">
                    <label><input name="more" type="checkbox"
                                  value="A"/>A:{{questions[questionIndex].selectA}}</label><br>
                    <label><input name="more" type="checkbox"
                                  value="B"/>B:{{questions[questionIndex].selectB}}</label><br>
                    <label><input name="more" type="checkbox"
                                  value="C"/>C:{{questions[questionIndex].selectC}}</label><br>
                    <label><input name="more" type="checkbox"
                                  value="D"/>D:{{questions[questionIndex].selectD}}</label><br>
                    <label v-if="questions[questionIndex].selectE">
                        <input name="more" type="checkbox" value="E"/>E:{{questions[questionIndex].selectE}}</label>
                </div>
                <div class="question-num"> {{questionIndex + 1}} /10</div>
                <div class="submit-button" @click="doCheck()"> 提交</div>
            </div>
            <div class="question-info" v-if="isTakePhoto">
                <img class="question-people" src="../assets/question_people.png"/>
                <div class="title-name"> 神雕侠侣</div>
                <img class="progress" :src="imgList[questionIndex].imgSrc"/>
                <div class="question-message">{{takePhotoInfos[questionIndex - 7].info}}</div>
                <div class="select-input">
                    <label><input name="Fruit" type="radio" value="A" checked/> A：是→上传照片 </label><br>
                    <label><input name="Fruit" type="radio" value="B"/> B：否 </label>
                </div>
                <div class="select-photo">
                    <!-- 上传图片 -->
                    <uploadImg ref="upload1" :imgSrc="takePhotoInfos[questionIndex - 7].imgSrc" :upType="'camera'"
                               v-on:imageSrc="doSetImageList" v-on:progress="doProgress"></uploadImg>
                </div>
                <div class="question-num"> {{questionIndex + 1}} /10</div>
                <div class="submit-button" @click="doTakePhotoNext"> 下一题</div>
            </div>
            <div class="answer-info" v-if="isAnswer">
                <div class="answer-message" v-html="questions[questionIndex].questionInfo.substr(5, questions[questionIndex].questionInfo.length -
                    1)">
                </div>
                <div class="answer-message">
                    A：{{questions[questionIndex].selectA}} B：{{questions[questionIndex].selectB}}
                </div>
                <div class="answer-message">
                    C：{{questions[questionIndex].selectC}} D：{{questions[questionIndex].selectD}}
                </div>
                <div class="answer-message" v-if="questions[questionIndex].selectE">
                    E：{{questions[questionIndex].selectE}}
                </div>

                <div class="answer-info-value">
                    <div class="title">答案：</div>
                    <div class="answer-info-info" v-html="questions[questionIndex].answer2">
                    </div>
                </div>
                <div class="answer-info-value">
                    <div class="title">解析：</div>
                    <div class="answer-info-info">{{questions[questionIndex].info}}</div>
                </div>
                <div class="submit-button" @click="doNext"> 下一题</div>
            </div>
        </div>
    </div>
</template>

<script>
    import uploadImg from '@/components/uploadImg'
    import {pushHistory} from '../utils/unit.js'

    export default {
        name: "Login",
        components: {
            uploadImg: uploadImg
        },
        data() {
            return {
                clickAble: false,
                longitude: 0,
                latitude: 0,
                userId: '',
                address: '',
                questionIndex: 0,
                countNum: 0,
                valueNum: 10,
                isQuestion: true,
                isTakePhoto: false,
                isAnswer: false,
                img1: '',
                img2: '',
                img3: '',
                answerStr: '',
                imgNext: true,
                takePhotoInfos: [{
                    info: '(图片题）是否有独立的体验区（10分)',
                    selectAnswer: '',
                    imgSrc: require('../assets/take-photo.png')
                },
                    {info: '(图片题）是否有美容仪器（10分)', selectAnswer: '', imgSrc: require('../assets/take-photo.png')},
                    {
                        info: '(图片题）店内是否有生物科技护肤品的陈列（10分)',
                        selectAnswer: '',
                        imgSrc: require('../assets/take-photo.png')
                    }
                ],
                questions: [
                    {
                        questionInfo: '(单选题)' + '<br/>' + '适合敏感肌肤的清洁类产品可以包含以下哪项(2分)',
                        selectA: '皂基',
                        selectB: '酒精香精',
                        selectC: '人工防腐剂',
                        selectD: '氨基酸',
                        answer: 'D',
                        answer2: 'D 氨基酸',
                        selectAnswer: '',
                        info: '氨基酸类洁面温和不刺激，适合敏感肌肤使用 。'
                    },
                    {
                        questionInfo: '(单选题)以下哪项不属于皮肤的三大层(4分)',
                        selectA: '角质层',
                        selectB: '表皮层',
                        selectC: '真皮层',
                        selectD: '皮下组织',
                        answer: 'A',
                        answer2: 'A 角质层',
                        selectAnswer: '',
                        info: '皮肤分为三大层：表皮层、真皮层、皮下组织，而表皮层又分为5小层：角质层、透明层、颗粒层、有棘层、基底层。'
                    },
                    {
                        questionInfo: '(单选题)以下哪项不属于生物科技护肤品销售人员的职业准则(6分)',
                        selectA: '整洁的仪容仪表',
                        selectB: '专业的皮肤知识',
                        selectC: '专业的彩妆技巧',
                        selectD: '熟练标准的接待流程',
                        answer: 'C',
                        answer2: 'C 专业的彩妆技巧',
                        selectAnswer: '',
                        info: '生物科技护肤品销售人员的职业准则包含：专业皮肤知识，整洁的仪容仪表，' +
                            '熟练的接待流程和专业的护肤手法及服务，熟知生物科技护肤品的理念和产品。'
                    },
                    {
                        questionInfo: '(单选题)以下哪项不属于肌肤问题(8分)',
                        selectA: '敏感',
                        selectB: '特干',
                        selectC: '混合',
                        selectD: '痤疮',
                        answer2: 'C 混合',
                        answer: 'C',
                        selectAnswer: '',
                        info: '混合肌属于肌肤类型，不属于肌肤问题。'
                    },
                    {
                        questionInfo: '(多选题)' + '<br/>' + '特干肌应选择含有____成分的护肤品<span style="color: #666; ">(15分，选对一项得3分，错选整题不得分)</span>',
                        selectA: '透明质酸',
                        selectB: '烟酰胺',
                        selectC: '水杨酸',
                        selectD: '甘油',
                        answer: 'ABD',
                        answer2: 'A 透明质酸' + '<br/>' + 'B 烟酰胺' + '<br/>' + 'D 甘油',
                        selectAnswer: '',
                        info: '对于有特干肌问题的人群来说，应选用含有增湿剂、润肤剂等成分的护肤品，而水杨酸刺激性过强，' +
                            '主要用于消炎祛痘，不适合特干肌人群使用。'
                    },
                    {
                        questionInfo: '(多选题)' + '<br/>' + '生物科技护肤品建立顾客档案要包含哪些内容<span style="color: #666; ">(15分，选对一项得3分，错选整题不得分)</span>',
                        selectA: '顾客信息',
                        selectB: '肌肤检测结果',
                        selectC: '问询结果',
                        selectD: '肌肤问题',
                        selectE: '所购产品',
                        answer: 'ABCDE',
                        answer2: 'A 顾客信息' + '<br/>' + 'B 肌肤检测结果' + '<br/>' + 'C 问询结果' + '<br/>' + 'D 肌肤问题' + '<br/>' + 'E 所购产品',
                        selectAnswer: '',
                        info: '顾客档案不仅要包含联系信息，还要包含标准接待流程中产生的其他信息，如肌肤检测结果、问询结果、肌肤问题、所购产品等。'
                    },
                    {
                        questionInfo: '(多选题)' + '<br/>' + '以下哪些可以是生物科技护肤品采用的水源<span style="color: #666; ">(20分，选对一项得5分，错选整题不得分)</span>',
                        selectA: '温泉水',
                        selectB: '矿泉水',
                        selectC: '高纯水',
                        selectD: '饮用水',
                        answer: 'ABCD',
                        answer2: 'A 温泉水' + '<br/>' + 'B 矿泉水' + '<br/>' + 'C 高纯水' + '<br/>' + 'D 饮用水',
                        selectAnswer: '',
                        info: '《化妆品生产企业规范》2007规定生产用水的水质应达到国家生活饮用水卫生标准（GB5749-2006）的要求。'
                    }
                ],
                imgList: [
                    {imgSrc: require('../assets/1.png')},
                    {imgSrc: require('../assets/2.png')},
                    {imgSrc: require('../assets/3.png')},
                    {imgSrc: require('../assets/4.png')},
                    {imgSrc: require('../assets/5.png')},
                    {imgSrc: require('../assets/6.png')},
                    {imgSrc: require('../assets/7.png')},
                    {imgSrc: require('../assets/8.png')},
                    {imgSrc: require('../assets/9.png')},
                    {imgSrc: require('../assets/10.png')}
                ]
            }
        },
        methods: {
            showToast(msg, duration) {
                duration = isNaN(duration) ? 3000 : duration;
                var m = document.createElement('div');
                m.innerHTML = msg;
                m.style.cssText = "width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;";
                document.body.appendChild(m);
                setTimeout(function () {
                    var d = 0.5;
                    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                    m.style.opacity = '0';
                    setTimeout(function () {
                        document.body.removeChild(m)
                    }, d * 1000);
                }, duration);
            },
            getCountNum() {
                if (this.questions[this.questionIndex].selectAnswer === this.questions[this.questionIndex].answer) {
                    if (this.questionIndex < 4) {
                        this.countNum += ((this.questionIndex + 1) * 2)
                    }
                    if (this.questionIndex === 4 || this.questionIndex === 5) {
                        this.countNum += 15
                    }
                    if (this.questionIndex === 6) {
                        this.countNum += 20
                    }
                } else if (this.questionIndex >= 4 && this.questionIndex < 7) {
                    if ((this.questionIndex === 4 || this.questionIndex === 5) &&
                        this.questions[this.questionIndex].answer.indexOf(this.questions[this.questionIndex].selectAnswer) != -1) {
                        this.countNum += this.questions[this.questionIndex].selectAnswer.length * 3
                    } else if (this.questionIndex === 6 &&
                        this.questions[this.questionIndex].answer.indexOf(this.questions[this.questionIndex].selectAnswer) != -1) {
                        this.countNum += this.questions[this.questionIndex].selectAnswer.length * 5
                    }
                }
            },
            getRadioValue() {
                if (this.questionIndex < 4) {
                    let obj = document.getElementsByName("Fruit")
                    for (let i = 0; i < obj.length; i++) {
                        if (obj[i].checked) {
                            this.questions[this.questionIndex].selectAnswer = obj[i].value

                        }
                    }
                } else {
                    let obj = document.getElementsByName("more")
                    for (let i = 0; i < obj.length; i++) {
                        if (obj[i].checked) {
                            this.questions[this.questionIndex].selectAnswer += obj[i].value
                        }
                    }
                }
                console.log('选择：' + this.questions[this.questionIndex].selectAnswer)
            },
            doSetLocal() {
                localStorage.setItem("isQuestion", this.isQuestion)
                localStorage.setItem("isAnswer", this.isAnswer)
                localStorage.setItem("isTakePhoto", this.isTakePhoto)
                localStorage.setItem("questionIndex", this.questionIndex)
                localStorage.setItem("valueNum", this.valueNum)
                localStorage.setItem("countNum", this.countNum)

                let Qs = []
                this.questions.forEach((item) => {
                    if (item.selectAnswer) {
                        Qs.push(item.selectAnswer)
                    }
                })
                this.takePhotoInfos.forEach((item) => {
                    if (item.selectAnswer) {
                        Qs.push(item.selectAnswer)
                    }
                })
                if (Qs.length > 0) {
                    this.answer = Qs.toString()
                    localStorage.setItem('answerStr', this.answerStr)
                }


                localStorage.setItem("img1", this.img1)
                localStorage.setItem("img2", this.img2)
                localStorage.setItem("img3", this.img3)
            },
            doCheck() {
                this.getRadioValue()
                this.getCountNum()
                if (this.questions[this.questionIndex].selectAnswer) {
                    this.isQuestion = false
                    this.isAnswer = true
                    this.doSetLocal()
                } else {
                    this.showToast('您还没有进行选择', 1000)
                }
            },
            doNext() {
                this.questionIndex += 1
                this.valueNum += 10
                if (this.questionIndex < 7) {
                    this.isQuestion = true
                    this.isAnswer = false
                } else {
                    this.isQuestion = false
                    this.isAnswer = false
                    this.isTakePhoto = true
                }
                this.doSetLocal()
            },
            doSetImageList(data) {
                if (this.questionIndex === 7) {
                    this.img1 = data
                } else if (this.questionIndex === 8) {
                    this.img2 = data
                } else if (this.questionIndex === 9) {
                    this.img3 = data
                }
            },
            doProgress(data) {
                console.log('progress>>>>' + data)
                if (data === 100) {
                    this.clickAble = false
                } else {
                    this.clickAble = true
                }
            },
            getTakePhotoRadioValue(img) {
                let obj = document.getElementsByName("Fruit")
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].checked) {
                        if (obj[i].value === 'A') {
                            if (!img) {
                                this.imgNext = false
                                this.showToast('您还没有上传图片！', 1000)
                                break
                            } else {
                                this.imgNext = true
                            }
                        } else {
                            this.imgNext = true
                        }
                    }
                }
            },
            doTakePhotoNext() {
                if (this.questionIndex === 9) {
                    this.getTakePhotoRadioValue(this.img3)
                    if (this.img3) {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'A'
                    } else {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'B'
                    }
                    if (this.imgNext) {
                        this.doFinish()
                    }
                } else if (this.questionIndex === 8) {
                    this.getTakePhotoRadioValue(this.img2)
                    if (this.img2) {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'A'
                    } else {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'B'
                    }
                    if (this.imgNext) {
                        this.questionIndex += 1
                        this.valueNum += 10
                    }
                } else if (this.questionIndex === 7) {
                    this.getTakePhotoRadioValue(this.img1)
                    if (this.img1) {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'A'
                    } else {
                        this.takePhotoInfos[this.questionIndex - 7].selectAnswer = 'B'
                    }
                    if (this.imgNext) {
                        this.questionIndex += 1
                        this.valueNum += 10
                    }
                }
                this.doSetLocal()
            },
            doFinish() {
                this.$bmob.initialize('5341f8e254942033b3dae717daa7eed5', '4e0664824ca488cccad8fe1508a2baa0');
                const query = this.$bmob.Query('question');
                if (this.img1) {
                    query.set("image1", this.img1)
                }
                if (this.img2) {
                    query.set("image2", this.img2)
                }
                if (this.img3) {
                    query.set("image3", this.img3)
                }
                let pointer = this.$bmob.Pointer('_User')
                const isPublisher = pointer.set(this.userId)
                query.set("user", isPublisher)
                const point = this.$bmob.GeoPoint({latitude: this.latitude, longitude: this.longitude})
                query.set("location", point)
                let Q10 = this.answer.split(',')
                this.questions.forEach((item) => {
                    if (item.selectAnswer) {
                        Q10.push(item.selectAnswer)
                    }
                })
                this.takePhotoInfos.forEach((item) => {
                    if (item.selectAnswer) {
                        Q10.push(item.selectAnswer)
                    }
                })
                query.set("Q10", Q10)
                query.set("count", this.countNum)
                query.save().then(res => {
                    this.$router.replace({name: 'finish', params: {countNum: this.countNum}});
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            pushHistory()
            // 监听历史记录点, 添加返回事件监听
            window.onpopstate = () => {
                this.showToast('不能后退喔!')
            }
        },
        created() {
            this.userId = localStorage.getItem("userId")
            this.longitude = parseFloat(localStorage.getItem("longitude"))
            this.latitude = parseFloat(localStorage.getItem("latitude"))
            console.log('qqq>>>>>' + this.userId)

            this.questionIndex = parseInt(localStorage.getItem("questionIndex"))
            this.valueNum = parseInt(localStorage.getItem("valueNum"))
            if (!this.questionIndex) {
                this.questionIndex = 0
                this.valueNum = 10
            } else {
                this.isQuestion = (localStorage.getItem("isQuestion") === 'true')
                this.isAnswer = (localStorage.getItem("isAnswer") === 'true')
                this.isTakePhoto = (localStorage.getItem("isTakePhoto") === 'true')
                this.answerStr = localStorage.getItem("answerStr")
                this.countNum = parseInt(localStorage.getItem("countNum"))
                this.img1 = localStorage.getItem("img1")
                this.img2 = localStorage.getItem("img2")
                this.img3 = localStorage.getItem("img3")
            }
            console.log(this.questionIndex)

        }
    }
</script>

<style lang="stylus" scoped>
    .all-question
        width 100%
        height 100%
        background-image url(../assets/common_bg.jpg)
        background-repeat no-repeat
        background-size 100% 100%
        position relative
        .mogol
            width 100%
            height 100%
            background rgba(241, 225, 242, 0.5)
            z-index 10
            position absolute
            top 0
            left 0
        .all-question-info
            width 100%
            height 100%
            padding 0 48px
            position absolute
            top 0
            left 0
            display flex
            z-index 999
            .question-info
                background white
                margin: auto
                border 3PX solid #4875a2
                min-height 700px
                padding-bottom 45px
                width 100%
                .question-people
                    width 150px
                    height 150px
                    margin-top 30px
                .title-name
                    font-size 32px
                .progress
                    width 350px
                    height 28px
                .question-num
                    font-size 24px
                    margin 25px 0
                .question-message
                    font-size 30px
                    text-align left
                    margin-left 30px
                .select-input
                    text-align left
                    margin-top 30px
                    margin-left 150px
                    label
                        display flex
                        input
                            margin-top 2px
                            margin-right 10px
                .select-photo
                    margin-top 30px
                    width 100%
                    height 200px
            .submit-button
                width 175px
                height 65px
                text-align center
                line-height 65px
                color white
                margin 0 auto
                font-size 30px
                margin-bottom 30px
                background-image url(../assets/button.png)
                background-repeat no-repeat
                background-size 100% 100%
            .answer-info
                padding-top 30px
                background white
                margin: auto
                border 3PX solid #4875a2
                min-height 500px
                width 100%
                .answer-message
                    font-size 28px
                    text-align left
                    margin-left 30px
                .answer-info-value
                    text-align left
                    display flex
                    margin-left 30px
                    margin-top 60px
                    margin-bottom 30px
                    .title
                        font-size 30px
                        width 100px
                    .answer-info-info
                        flex 1
                        margin-top 10px
</style>