<template>
    <div>
        <router-link 
            v-if="$route.path !== '/time-entries/log-time'"
            to="/time-entries/log-time"
            class="btn btn-primary"
            >
            创建
        </router-link>
        <div v-if="$route.path !== '/time-entries/log-time'">
            <h3>创建</h3>
        </div>
        <hr>
        <router-view></router-view>
        <div class="time-entries">
            <p v-if="!plans.length"><strong>还没有进行中的计划</strong></p>
            <div class="list-group">
                <a href="#" class="list-group-item" v-for="(plan, index) in plans">
                    <div class="row">
                        <div class="col-md-2 user-details">
                            <img :src="plan.avatar" class="avatar img-circle img-responsive" alt="">
                            <p class="text-center">
                                <strong>
                                    {{ plan.name }}
                                </strong>
                            </p>
                        </div>
                        <div class="col-md-2 text-center time-block">
                            <h3 class="list-group-item-text total-time">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ plan.totalTime }}
                            </h3>
                            <p class="label label-primary">
                                <i class="glyphicon glyphicon-calendar"></i>
                                {{ plan.date }}
                            </p>
                        </div>
                        <div class="div col-md-7 comment-section">
                            <p>{{ plan.comment }}</p>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-danger" @click="deletePlan(index)">
                                <i class="glyphicon glyphicon-remove"></i>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TimeEntries',
        computed: {
            plans() {
                // 从store中取出数据
                return this.$store.state.list
            }
        },
        methods: {
            deletePlan(index) {
                // 减去总时间
                this.$store.dispatch('decTotalTime', this.plans[index].totalTime)
                // 删除该计划
                this.$store.dispath('deletePlan', index)
            }
        }
    }
</script>
<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>