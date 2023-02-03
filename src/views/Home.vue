<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px">
      <el-card class="box-card">
        <div class="user">
          <img src="@/assets/DefaultAvatar.jpg" alt="" />
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-10-10</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="padding-left: 10px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥{{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <div class="graph">
        <!-- 折线图 -->
        <el-card class="broken-line-graph">
          <div ref="brokenLineGraph" style="height: 280px"></div>
        </el-card>
        <div class="bar-pie-graph">
          <!-- 柱状图 -->
          <el-card class="bar-graph">
            <div ref="barGraph" style="height: 260px"></div>
          </el-card>
          <!-- 饼图 -->
          <el-card class="pie-graph">
            <div ref="pieGraph" style="height: 240px"></div>
          </el-card>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "@/api";
import * as echarts from "echarts";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 300,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 300,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 2000,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1500,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 4000,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.Graph();
  },
  watch: {},
  computed: {},
  methods: {
    Graph() {
      getData().then(({ data }) => {
        const { tableData, userData, videoData } = data.data;
        this.tableData = tableData;

        //折线图
        const brokenLineGraph = echarts.init(this.$refs.brokenLineGraph);
        const brokenLineGraphOption = {
          xAxis: {
            data: ["A", "B", "C", "D", "E"],
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 43, 49],
              type: "line",
              stack: "x",
            },
            {
              data: [5, 4, 3, 5, 10],
              type: "line",
              stack: "x",
            },
          ],
          tooltip: {},
        };

        // console.log(brokenLineGraphOption);
        brokenLineGraph.setOption(brokenLineGraphOption);

        //柱状图
        const barGraph = echarts.init(this.$refs.barGraph);
        const barGraphOption = {
          legend: {
            //图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: userData.map((item) => item.data),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        // console.log(barGraphOption);
        barGraph.setOption(barGraphOption);

        //饼状图
        const pieGraph = echarts.init(this.$refs.pieGraph);
        const pieGraphOption = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: videoData,
              type: "pie",
            },
          ],
        };
        // console.log(pieGraphOption);
        pieGraph.setOption(pieGraphOption);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .user-info {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph {
  .broken-line-graph {
    height: 280px;
  }
  .bar-pie-graph {
    display: flex;
    justify-content: space-between;
    height: 260px;
    margin-top: 20px;
    .el-card {
      width: 48%;
    }
  }
}
</style>
