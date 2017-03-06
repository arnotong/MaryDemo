namespace Models.Person.Mary {
    export class MarySpeed {
        private min:number = 0.1
        private max:number = 2.0
        private acc:number = 0.2
        private speed:number = 0

        constructor (min?:number, max?:number, acc?:number) {
            this.setSpeedData(min, max, acc)
        }

        private setSpeedData(min, max, acc) {
            this.min = this.formatNumber(min, this.min)
            this.max = this.formatNumber(max, this.max)
            this.acc = this.formatNumber(acc, this.acc)
            this.speed = this.formatNumber(min, this.min)
        }

        private formatNumber(value:any, defValue:number) {
            let val = defValue
            let fVal = Number(value)

            if (!isNaN(fVal) && value !== null) {
                val = fVal
            }

            return val
        }

        public getMax():number {
            return this.max
        }
        
        public getAcc():number {
            return this.acc
        }

        public setData(min:number, max:number, acc:number):MarySpeed {
            this.setSpeedData(min, max, acc)
            return this
        }

        public getSpeed():number {
            this.speed = this.speed + this.acc
            this.speed = this.speed > this.max ? this.max : this.speed

            return this.speed
        }

        public init():MarySpeed {
            this.setSpeedData(this.min, this.max, this.acc)
            
            return this
        }
    }
}