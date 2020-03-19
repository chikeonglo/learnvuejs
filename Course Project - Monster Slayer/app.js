new Vue({
    el: '#app',
    data: {
        startGame: false,
        playerHealth: 100,
        monsterHealth: 100,
        log: [],
    },
    methods: {
        initGame: function() {
            this.startGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = []
        },
        calcDMG: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monAtt: function () {
            dmg = this.calcDMG(10, 20);
            this.playerHealth -= dmg;
            this.log.unshift({
                player: false,
                text: "Hit player for " + dmg
            })
            this.checkWin();
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm("Won against the monster. New Game?")) {
                    this.initGame();
                } else {
                    return this.startGame = false;
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm("Loser, you lost against the monster. New Game?")) {
                    this.initGame();
                } else {
                    return this.startGame = false;
                }
                return true
            }
            return false;
        },
        attack: function () {
            let dmg = this.calcDMG(5, 10);
            this.monsterHealth -= dmg;
            this.log.unshift({
                player: true,
                text: "Hit monster for " + dmg
            })
            if (this.checkWin()) {
                return;
            }
            this.monAtt();
        },
        specialAttack: function() {
            let dmg = this.calcDMG(10,20);
            this.monsterHealth -= dmg;
            this.log.unshift({
                player: true,
                text: "SPECIAL ATTACK. Hit monster for " + dmg
            })
            if (this.checkWin()) {
                return;
            }
            this.monAtt();      
        },
        heal: function() {
            if (this.playerHealth <= 85){
                this.playerHealth += 15;
            } else {
                this.playerHealth = 100;
            }
            this.log.unshift({
                player: true,
                text: "Healing for 15"
            })
            this.monAtt();
        },
        giveUp: function() {
            this.startGame = false
        }

    }
})