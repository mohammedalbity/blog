<template>
  <Chart
      type="line"
      :data="chartDataInput"
      :options="chartOptions"
      class="h-[30rem] w-full"
  />
</template>

<script setup lang="ts">
import Chart from 'primevue/chart'

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    fill: boolean
    borderColor: string
    tension: number
  }[]
}

interface Props {
  chartDataInput: ChartData
  title: string
}

const props = defineProps<Props>()
const chartOptions = ref<Record<string, any>>({})


onMounted(() => {
  chartOptions.value = setChartOptions()
})

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: documentStyle.getPropertyValue('--p-text-color'),
          font: {
            family: 'Inter, sans-serif'
          }
        }
      },
      title: {
        display: true,
        text: props.title,
        color: documentStyle.getPropertyValue('--p-text-color'),
        font: {
          size: 16,
          weight: 'bold',
          family: 'Inter, sans-serif'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: documentStyle.getPropertyValue('--p-text-muted-color')
        },
        grid: {
          color: documentStyle.getPropertyValue('--p-content-border-color'),
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: documentStyle.getPropertyValue('--p-text-muted-color')
        },
        grid: {
          color: documentStyle.getPropertyValue('--p-content-border-color'),
          drawBorder: false
        },
        beginAtZero: true
      }
    }
  }
}
</script>