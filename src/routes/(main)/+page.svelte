<script lang="ts">
  import type { PageData } from "./$types";
	import PageLanding from "$lib/components/PageLanding.svelte";
  import { getImage } from "$lib/utils";

  export let data: PageData;
</script>

<PageLanding center src={getImage("landing.webp", "lg", "library")}>
  <h2 class="tracking-widest -mt-28">啟程向世界學習</h2>
  <h1 class="text-4xl tracking-wider font-title">世界是学校</h1>
</PageLanding>

<main class="lg:p-sm p-xs">
  <section class="lg:items-stretch gap-8 flex lg:flex-row flex-col-reverse">
    <div class="w-full lg:h-auto h-80 bg-cover bg-center" style:background-image="url('{getImage("home.jpg", "md", "library")}')"></div>

    <div>
      我們一家把房子、車子和家當都賣掉，帶著一卡皮箱，到世界各地旅行，把世界當學校。
      這裡紀錄了我們一家四口體驗生活即教育的環球旅程。

      <div class="my-4">

      這裡沒有行程規劃，或是購物、餐廳資訊，有的是我們在路途中的經歷和反思，有的是爸媽和孩子一起脫離教育體系，從生活中學習知識和能力的過程，從實際腳踏過的土地來了解地理和歷史。

      <div class="my-4">

      這裡沒有網美照，或是專業的攝影圖片，有的是我們在一路上遇到的人事物，累積成許許多多的故事，有的是我們站在大自然前的震撼，親眼見到人類藝術結晶的感動，以後會成為我們一家的共同記憶。

      <div class="my-4">

      這裡沒有交通資訊，或是預算規劃，有的是我們在每個城市所做的觀察，拿來和原本居住在的城市做比較，有的是我們在每個國家吃到的特別食物，我們在每個街道轉角發現的小驚喜。

      <div class="my-4">

      Worldschooling 是一種生活方式，沒有一定的模式和方法，沒有一定的時間長度，這裡分享了我們的旅程，希望能帶給你不同的思維，啟程向世界學習。

      <div class="my-4">

      世界是學校，跟我們一起 Worldschooling!
    </div>
  </section>
</main>
