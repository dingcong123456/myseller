<template>
  <div :class="sizeStars">
    <span v-for="star in stars" :class="star" class="starImage" track-by="$index"></span>
  </div>

</template>

<script type="text/ecmascript-6">
  const STAR_ON = "star-on";
  const STAR_HALF = "star-half";
  const STAR_OFF = "star-off";
  const STAR_LENGTH = 5;

  export default {
    props: {
      size:  Number,
      score: Number
    },
    computed: {
      sizeStars() {
        return "stars-" + this.size;
      },
      stars() {
        let stars = [];
        let score = Math.floor(this.score*2)/2;
        let sintger = Math.floor(score);
        let half = score%1;
        for(let i=0;i<sintger;i++) {
          stars.push(STAR_ON);
        };
        if(half){
          stars.push(STAR_HALF);
        };
        while(stars.length < STAR_LENGTH){
          stars.push(STAR_OFF);
        };
        return stars;
      }
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .starImage
      display inline-block
      background-repeat no-repeat
  .stars-24
      clear both
      .star-on
          width 20px
          height 19px
          bg-image('star24_on')
          background-size 20px 19px
      .star-half
          width 20px
          height 19px
          bg-image('star24_half')
          background-size 20px 19px
      .star-off
          width 20px
          height 19px
          bg-image('star24_off')
          background-size 20px 19px


</style>
