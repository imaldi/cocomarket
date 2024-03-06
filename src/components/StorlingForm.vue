<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Storling</div>
          </div>
  
          <div class="flex pt-4">
            <div class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex">
              <icon icon="iconamoon:search-light" color="#000" width="28" height="28" />
              <div class="ml-4 my-auto">Search Mitra</div>
            </div>
            <div class="my-auto ml-2">
              <div class="bg-light rounded-md p-1">
                <icon icon="fluent:toggle-multiple-16-regular" color="#7ACDD6" width="28" height="28" />
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <div class="w-full"><img src="../assets/img/maps.png" width="100%" height="20%" alt="maps" /></div>
          <div class="text-center bg-white rounded-2xl shadow-xl p-4 font-bold">Near my Location</div>
        </div>
  
        <div>
          <div class="mx-4 pt-2 flex">
            <div>
              <img src="../assets/img/gerobak.png" width="100" height="100" alt="gerobak" />
            </div>
            <div class="my-auto">
              <div class="my-auto">Bakso Solo Kang Emil</div>
              <div class="text-gray">Bakso & Mie Ayam, Minuman, & Aneka Nasi</div>
              <div>Diantar dalam 10-20 Menit</div>
              <div>Diskon 50%</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    color: #000000;
  }
  </style>
  