<template>
    <div class="all-questionList">
        <div id="allmap"></div>

        <div v-if="false" class="question-info" v-for="(item,index) in questions" :key="index">
            <div> {{item.questionInfo}}</div>
            <div style="display: flex">
                <div v-if="item.selectA">A:{{item.selectA}}</div>
                <div v-if="item.selectB">B:{{item.selectB}}</div>
                <div v-if="item.selectC">C:{{item.selectC}}</div>
                <div v-if="item.selectD">D:{{item.selectD}}</div>
                <div v-if="item.selectE">E:{{item.selectE}}</div>
            </div>
        </div>

        <div class="question-title">
            <div>挑战新“肌愈”</div>
        </div>

        <div class="questionList-select">
            <div @click="changeChecked(false)"> 待确认</div>
            <div @click="changeChecked(true)"> 已确认</div>
        </div>
        <div class="bar">
            <div class="color" v-if="!isChecked"></div>
            <div class="color2" v-if="isChecked"></div>
        </div>

        <div class="questionList-info">

            <div class="questionList-title">
                <div class="question-answer"> 答案</div>
                <div> 店铺</div>
                <div> 坐标</div>
                <div> 得分</div>
                <div> 答题日期</div>
                <div> 照片</div>
                <div> 状态</div>
            </div>

            <div class="questionList" v-for="(item,index) in questionList" :key="index">
                <div class="question-answer">
                    <img class="selected" v-if="isChecked" src="../assets/radio-icon.png"/>
                    <img class="selected" v-if="!isChecked" src="../assets/radio-icon-unselect.png" @click="dialogShow(item)"/>
                    <div>
                        1:{{item.Q10[0]}},
                        2:{{item.Q10[1]}},
                        3:{{item.Q10[2]}},
                        4:{{item.Q10[3]}},
                        5:{{item.Q10[4]}},
                        6:{{item.Q10[5]}},
                        7:{{item.Q10[6]}},
                        8:{{item.Q10[7]}},
                        9:{{item.Q10[8]}},
                        10:{{item.Q10[9]}}
                    </div>
                </div>
                <div> {{item.user.username}}</div>
                <div class="question-location"> <a :href=gotoLocation(item) target="_Blank">{{item.location.latitude}}<br>{{item.location.longitude}}</a></div>
                <div> {{item.count}}</div>
                <div> {{item.createdAt}}</div>
                <div class="all-img">
                    <div class="select_img">
                        <img  class="select_img_img" :src="item.image1.url" v-if="item.image1" @click="clickedImg(item.image1.url)"/>
                        <input v-if="item.image1 && !isChecked" :name="item.user.username" type="checkbox" />
                    </div>
                    <div class="select_img">
                        <img  class="select_img_img" :src="item.image2.url" v-if="item.image2" @click="clickedImg(item.image2.url)"/>
                        <input v-if="item.image2 && !isChecked" :name="item.user.username" type="checkbox" />
                    </div>
                    <div class="select_img">
                        <img class="select_img_img" :src="item.image3.url" v-if="item.image3" @click="clickedImg(item.image3.url)"/>
                        <input v-if="item.image3 && !isChecked" :name="item.user.username" type="checkbox" />
                    </div>
                </div>
                <div class="question-check" v-if="!isChecked">
                    待确认
                </div>
                <div class="question-check" v-if="isChecked">
                    <img class="selected" v-if="isChecked" src="../assets/icon-point.png"/>
                    已确认
                </div>
            </div>

        </div>

        <div class="loading-more" @click="loadingMore" v-if="isHasNext">
            <div>
                加载更多
            </div>
        </div>

        <div class="show-dialog" v-if="isShowDialog">

            <div class="show-dialog-info">
                <div class="show-dialog-title">
                    您确定变更了吗？
                </div>

                <div class="show-dialog-info-info" >
                    <div class="show-dialog-dismiss" @click="dialogDismiss">
                        取消
                    </div>
                    <div class="show-dialog-ok" @click="checkItem">
                        确定
                    </div>
                </div>
            </div>

        </div>

        <div class="question-big-image" v-if="isShowBigImage" @click="closeImg">
            <img :src="bigImage"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "QuestionList",
        data() {
            return {
                questionList: [],
                isChecked: false,
                isHasMore: true,
                questions: [
                    {
                        questionInfo: '(单选题)1：适合敏感肌肤的清洁类产品可以包含以下哪项(2分)',
                        selectA: '皂基',
                        selectB: '酒精香精',
                        selectC: '人工防腐剂',
                        selectD: '氨基酸',
                        answer: 'D',
                        selectAnswer: '',
                        info: '氨基酸类洁面温和不刺激，适合敏感肌肤使用 。'
                    },
                    {
                        questionInfo: '(单选题)2：以下哪项不属于皮肤的三大层(4分)',
                        selectA: '角质层',
                        selectB: '表皮层',
                        selectC: '真皮层',
                        selectD: '皮下组织',
                        answer: 'A',
                        selectAnswer: '',
                        info: '皮肤分为三大层：表皮层、真皮层、皮下组织，而表皮层又分为5小层：角质层、透明层、颗粒层、有棘层、基底层。'
                    },
                    {
                        questionInfo: '(单选题)3：以下哪项不属于生物科技护肤品销售人员的职业准则(6分)',
                        selectA: '整洁的仪容仪表',
                        selectB: '专业的皮肤知识',
                        selectC: '专业的彩妆技巧',
                        selectD: '熟练标准的接待流程',
                        answer: 'C',
                        selectAnswer: '',
                        info: '生物科技护肤品销售人员的职业准则包含：专业皮肤知识，整洁的仪容仪表，' +
                            '熟练的接待流程和专业的护肤手法及服务，熟知生物科技护肤品的理念和产品。'
                    },
                    {
                        questionInfo: '(单选题)4：以下哪项不属于肌肤问题(8分)',
                        selectA: '敏感',
                        selectB: '特干',
                        selectC: '混合',
                        selectD: '痤疮',
                        answer: 'C',
                        selectAnswer: '',
                        info: '混合肌属于肌肤类型，不属于肌肤问题。'
                    },
                    {
                        questionInfo: '(多选题)5：特干肌应选择含有____成分的护肤品(15分，选对一项得3分，错选整题不得分)',
                        selectA: '透明质酸',
                        selectB: '烟酰胺',
                        selectC: '水杨酸',
                        selectD: '甘油',
                        answer: 'ABD',
                        selectAnswer: '',
                        info: '对于有特干肌问题的人群来说，应选用含有增湿剂、润肤剂等成分的护肤品，而水杨酸刺激性过强，' +
                            '主要用于消炎祛痘，不适合特干肌人群使用。'
                    },
                    {
                        questionInfo: '(多选题)6：生物科技护肤品建立顾客档案要包含哪些内容(15分，选对一项得3分，错选整题不得分)',
                        selectA: '顾客信息',
                        selectB: '肌肤检测结果',
                        selectC: '问询结果',
                        selectD: '肌肤问题',
                        selectE: '所购产品',
                        answer: 'ABCDE',
                        selectAnswer: '',
                        info: '顾客档案不仅要包含联系信息，还要包含标准接待流程中产生的其他信息，如肌肤检测结果、问询结果、肌肤问题、所购产品等。'
                    },
                    {
                        questionInfo: '(多选题)7:以下哪些可以是生物科技护肤品采用的水源(20分，选对一项得5分，错选整题不得分)',
                        selectA: '温泉水',
                        selectB: '矿泉水',
                        selectC: '高纯水',
                        selectD: '饮用水',
                        answer: 'ABCD',
                        selectAnswer: '',
                        info: '《化妆品生产企业规范》2007规定生产用水的水质应达到国家生活饮用水卫生标准（GB5749-2006）的要求。'
                    },
                    {
                        questionInfo: '(图片题）8：是否有独立的体验区（10分)',
                        selectAnswer: ''
                    },
                    {
                        questionInfo: '(图片题）9：是否有美容仪器（10分)',
                        selectAnswer: ''
                    },
                    {
                        questionInfo: '(图片题）10：店内是否有生物科技护肤品的陈列（10分)',
                        selectAnswer: '',
                    }
                ],
                bigImage: '',
                isShowBigImage: false,
                skipNumLeft: 0,
                skipNumRight: 0,
                isHasNextLeft: true,
                isHasNextRight: true,
                isHasNext: true,
                page: 1,
                pageSize: 10,
                isShowDialog: false,
                item: {}
            }
        },
        methods: {
            getList() {
                const query = this.$bmob.Query("question", "_User");
                query.include('user')
                query.equalTo("checked", "==", this.isChecked);
                query.limit(this.pageSize)
                if (this.isChecked) {
                    query.skip(this.skipNumRight)
                } else {
                    query.skip(this.skipNumLeft)
                }
                query.order("-count")
                query.find().then(res => {
                    this.questionList = res

                    if(this.questionList.length < this.pageSize) {
                        this.isHasNext = false
                    }

                    if ( this.isChecked && this.questionList.length < this.pageSize) {
                        this.isHasNextRight = false
                    }
                    if (!this.isChecked && this.questionList.length < this.pageSize) {
                        this.isHasNextLeft = false
                    }
                });
            },
            dialogDismiss() {
                this.isShowDialog = false
            },
            dialogShow(item) {
                this.isShowDialog = true
                this.item = item
            },
            selectImage() {
                let obj = document.getElementsByName(this.item.user.username)
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].checked) {
                        this.item.count += 10
                    }
                }
            },
            checkItem() {
                let thit = this
                thit.selectImage()
                const query = this.$bmob.Query('question');
                query.get(thit.item.objectId).then(res => {
                    res.set('count', thit.item.count)
                    res.set('checked', !thit.isChecked)
                    res.save()
                })
                this.isShowDialog = false
                setTimeout(function () {
                    thit.getList()
                }, 1000);

            },
            changeChecked(is) {
                this.isChecked = is
                this.questionList = []
                this.getList()
            },
            clickedImg(url) {
                this.bigImage = url
                this.isShowBigImage = true
            },
            closeImg() {
                this.bigImage = ""
                this.isShowBigImage = false
            },
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
            loadingMore() {
                if (this.isChecked && this.isHasNextRight) {
                    this.page = this.page + 1
                    this.skipNumRight = this.pageSize * (this.page - 1)
                } else if(!this.isChecked && this.isHasNextLeft) {
                    this.page = this.page + 1
                    this.skipNumLeft = this.pageSize * (this.page - 1)
                } else {
                    this.showToast('没有更多了')
                }

                this.getList()
            },
            gotoLocation(item) {
                let str = ''
                str = 'baidu.html?lat=' + item.location.latitude + '&lng=' + item.location.longitude
                return str
            }
        },
        created() {
            this.getList()
        }
    }
</script>

<style lang="stylus" scoped>
    .all-questionList
        width 100%
        height 100%
        .question-title
            font-size 20px
            color white
            background #2196F3
            height 40px
        .questionList-select
            padding-left 40px
            display flex
            background #2196F3
            div
                width 100px
                color white
                border-radius 20px
                margin-right 30px
                height 30px
                line-height 30px
        .question-info
            text-align left
        .questionList-info
            padding 0 40px
            background #F5F5F5
        .questionList-title
            height 24px
            color #333
            overflow-y scroll
            margin-bottom 8px
            background #F5F5F5
            font-size 10px
            line-height 24px
            display flex
            border-bottom 1PX solid #E0E0E0
            .question-answer
                flex 2
            div
                flex 1
                text-align left
        .questionList
            color #666
            overflow-y scroll
            background white
            font-size 10px
            display flex
            border-bottom 4px solid #F5F5F5
            div
                height 34px
                line-height 34px
                flex 1
                text-align left
                img
                    width 22px
                    height 22px
                    margin-right 10px
            .all-img
                display flex
                flex 1
                height 34px
                line-height 34px
                text-align left
                .select_img
                    display flex
                    flex-direction column
                    .select_img_img
                        width 22px
                        height 22px
                    input
                        width 100%
                        text-align center
            .question-check
                flex 1
                border-radius 20px
                line-height 34px
                text-align center
            .question-answer
                height 34px
                line-height 34px
                padding-left 10px
                flex 2
                display flex
                .selected
                    margin-top 8px
                    width 15px
                    height 15px
                div
                    height 34px
                    line-height 17px
            .question-location
                height 34px
                line-height 17px
        .question-big-image
            width 100%
            height 100%
            background rgba(0, 0, 0, 0.3)
            text-align center
            position absolute
            top 0
            left 0
            img
                margin-top 100px
                width 300px
        .show-dialog
            width 100%
            height 100%
            background rgba(0, 0, 0, 0.7)
            position absolute
            top 0
            left 0
            display flex
            justify-content center
            .show-dialog-info
                margin-top 10%
                width 300px
                height 100px
                background white
                border-radius 8px
                text-align center
                .show-dialog-title
                    height 70px
                    line-height 70px
                    font-size 16px
                    border-bottom 1PX solid #DDD
                .show-dialog-info-info
                    height 30px
                    display flex
                    line-height 30px
                    justify-content center
                    .show-dialog-dismiss
                        font-size 14px
                        flex 1
                        border-right 1PX solid #DDD
                        color #999
                    .show-dialog-ok
                        font-size 14px
                        flex 1
                        color #108EE9

        .loading-more
            width 100%
            height 28px
            margin-bottom 30px
            margin-top 30px
            div
                margin auto
                color white
                width 81px
                background #2196F3
                height 28px
                line-height 28px
                font-size 10px
        .bar
            padding-left 40px
            width 100%
            height 3px
            display flex
            background #2196F3
            .color
                width 70px
                background white
                margin-left 15px
                height 3px
                line-height 3px
            .color2
                width 70px
                background white
                margin-left 145px
                height 3px
                line-height 3px
</style>