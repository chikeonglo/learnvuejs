new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    userClass: "",
    isVisible: true,
    myStyle: {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    },
    progressBar: {
      width: '0px',
      height: '10px',
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.shrink = !vm.effectClasses.shrink
        vm.effectClasses.highlight = !vm.effectClasses.highlight
      }, 1000)
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 1000)
    }
  }
});
