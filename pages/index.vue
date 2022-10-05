<script setup lang="ts">
const { getTodoApi, getUsersApi } = useTodo()

interface Todo {
  title: string
}

const todo = ref<Todo>()

onMounted( async () => {
    await nextTick( async () => {
      const datares = await getTodoApi(1)
      todo.value = datares.data.value
    })
})

const { data: dataTodo } = await useAsyncData(async () => await getUsersApi(), { initialCache: false })
</script>

<template>
  <div>
    <h2>Client Side</h2>
    <pre>
      {{ todo }}
    </pre>
    <hr />
    <h2>Server Side</h2>
    <pre>
      {{ dataTodo }}
    </pre>
  </div>
</template>
