<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-md-6">
                <label>日期</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="date"
                    placeholder="日期"
                />
            </div>
            <div class="col-md-6">
                <label>时间</label>
                <input 
                    type="number"
                    class="form-control"
                    v-model="totalTime"
                    placeholder="时间"
                />
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>备注</label>
                <input
                type="text"
                class="form-control"
                v-model="comment"
                placeholder="Comment"
                />
            </div>
        </div>
        <button class="btn btn-primary" @click="save()">保存</button>
        <router-link to="/time-entries" class="btn btn-default">取消</router-link>
         <hr>
    </div>
</template>
<script>
    export default {
        name: 'LogTime',
        data() {
            return {
                date: '',
                totalTime: '',
                comment: ''
            }
        },
        methods: {
            save() {
                const plan = {
                    name: '李二狗',
                    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
                    date: this.date,
                    totalTime: this.totalTime,
                    comment: this.comment
                }

                this.$store.dispatch('savePlan', plan)
                this.$store.dispatch('addTotalTime', this.totalTime)
                this.$router.go(-1);
            }
        }
    }
</script>