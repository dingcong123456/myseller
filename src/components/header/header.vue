<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>

            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin"></span><span class="bulletin-title">{{seller.bulletin}}</span>
            <span class="icon-keyboard_arrow_right"></span>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" alt="">
        </div>
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <li class="icon-close"></li>
            </div>

        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        data () {
            return {
                classMap :[],
                detailShow : false
            };
        },
        props : {
            seller: {
                type:   Object
            }
        },
        created (){
            this.classMap=['decrease','discount','special','invoice','guarantee']
        },
        methods : {
            showDetail(){
                this.detailShow = true;
            },
            hideDetail(){
                this.detailShow = false;
            }
        }

    };

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/index.styl"
    @import "../../common/stylus/icon.styl"
    .header
        color: #fff
        position relative
        background rgba(7,17,27,0.5)
        .content-wrapper
            padding 24px 12px 18px 24px
            font-size 0
            position relative
            .avatar
                display inline-block
                vertical-align top
                img
                    border-radius 2px
            .content
                display inline-block
                font-size 14px
                margin-left 16px
                .title
                    margin 2px 0 8px 0
                    .brand
                        vertical-align top
                        width 30px
                        height 18px
                        display inline-block
                        bg-image('brand')
                        background-size 30px 18px
                        background-repeat no-repeat
                    .name
                        font-size 16px
                        margin-left 6px
                        line-height 18px
                        font-weight bold
                .description
                    font-size 12px
                    margin-top 8px
                    line-height 12px
                    font-weight 200
                    color rgb(255,255,255)
                .support
                    margin-top 10px
                    .icon
                        display inline-block
                        width 12px
                        height 12px
                        background-size 12px 12px
                        background-repeat no-repeat
                        vertical-align middle
                        margin-right 4px
                        &.decrease
                            bg-image('decrease_1')
                        &.discount
                            bg-image('discount_1')
                        &.guarantee
                            bg-image('guarantee_1')
                        &.invoice
                            bg-image('invoice_1')
                        &.special
                            bg-image('special_1')


                    .text
                        font-size 10px
                        line-height 12px
                        font-weight 200
                        color rgb(255,255,255)

            .support-count
                position absolute
                right 12px
                bottom 14px
                background rgba(0,0,0,0.2)
                border-radius 14px
                text-align center
                padding 0 8px
                height 24px
                .count
                    display inline-block
                    font-size 12px
                    line-height 24px
                    vertical-align top
                    /*height 24px*/
                .icon-keyboard_arrow_right
                    font-size 12px
                    line-height 24px
                    margin-left 2px
                    vertical-align top
                    display inline-block


        .bulletin-wrapper
            /*width 100%*/
            line-height 28px
            height 28px
            padding 0 22px 0 12px
            background rgba(7,17,27,0.2)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            position relative
            .bulletin
                display inline-block
                width 22px
                height 12px
                margin-top 8px
                bg-image('bulletin')
                background-repeat no-repeat
                background-size 100% 100%
                vertical-align top
            .bulletin-title
                vertical-align top
                font-size 12px
                margin-left 4px
                line-height 28px
            .icon-keyboard_arrow_right
                position absolute
                font-size 12px
                line-height 28px
                top 0
                right 12px
                vertical-align top
                display inline-block
        .background
            width 100%
            height:100%
            position absolute
            left 0
            top 0
            z-index -1
            filter blur(10px)
            overflow hidden
        .detail
            position  fixed
            left 0
            top 0
            width 100%
            height 100%
            overflow auto
            z-index 100
            background rgba(7,17,27,0.8)
            .detail-wrapper
                min-height 100%
                .detail-main
                    margin-top 64px
                    padding-bottom 64px
            .detail-close
                width 32px
                height 32px
                position relative
                margin -64px auto 0 auto
                margin-top -64px
                clear both
                font-size 32px



</style>