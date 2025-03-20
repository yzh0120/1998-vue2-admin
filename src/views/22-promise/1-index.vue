<template>

</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
// 创建 10 个异步任务
const tasks = [];
for (let i = 1; i <= 10; i++) {
  tasks.push(() => this.asyncMethod(i));
}

// 执行任务，最多同时执行 2 个
this.runTasks(tasks, 2)
  .then(() => {
    console.log("All tasks completed!");
  })
  .catch((error) => {
    console.error("Error running tasks:", error);
  });
    },
    methods:{
        // 模拟异步方法
        asyncMethod(id) {
            return new Promise((resolve) => {
                const delay = Math.random() * 2000; // 随机延迟
                setTimeout(() => {
                console.log(`Task ${id} 完成消耗时间  ${delay.toFixed(0)}ms`);
                resolve();
                }, delay);
            });
        },
        // 控制并发执行的函数
 runTasks(tasks, concurrency) {
  return new Promise((resolve) => {
    let running = 0; // 当前正在运行的任务数
    let index = 0; // 当前任务索引
    let completed = 0; // 已完成的任务数
    const results = []; // 存储任务结果

    function next() {
      // 如果所有任务都已完成，则 resolve
      if (completed === tasks.length) {
        resolve(results);
        return;
      }

      // 如果还有任务未执行且当前运行的任务数小于并发数
      while (running < concurrency && index < tasks.length) {
        const task = tasks[index];
        const currentIndex = index;
        index++;

        running++;
        task()
          .then((result) => {
            results[currentIndex] = result; // 存储任务结果
          })
          .catch((error) => {
            results[currentIndex] = error; // 存储错误
          })
          .finally(() => {
            running--;
            completed++;
            next(); // 继续执行下一个任务
          });
      }
    }

    next(); // 开始执行任务
  });
},
    },
}
</script>