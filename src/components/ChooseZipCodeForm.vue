<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex items-center">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-80 justify-between flex items-center font-bold border-solid border border-gray rounded-xl px-6 py-2 ml-4">
                <div><icon icon="iconamoon:search-light" color="#000" width="20" height="20" /></div>
                <input class="border-0" type="text" name="search" id="search" placeholder="Search Your Location">
                <div><icon icon="ant-design:close-circle-outlined" color="green" width="20" height="20" /></div>
            </div>
          </div>
        </div>
  
        <div>
          <div class="w-full"><img src="../assets/img/add-address.png" width="100%" height="20%" alt="maps" /></div>
        </div>
        

        <div class="relative">
        <div class="fixed w-full h-[80vh] bg-white rounded-lg shadow-md" style="bottom: 0">
            <div class="flex justify-center">
                <div class="bg-gray rounded-full w-20 h-1 m-2 "></div>
            </div>

            <div class="mt-4 px-10">
               <div class="font-semibold text-xs">Search Your Location</div>
               
                <div>
                    <div class="flex items-center">
                        <div><icon class="flex items-center mr-2 pt-[4px]" icon="prime:circle-fill" color="gray" width="28" height="16" /></div>
                        <div class="text-md font-500">BALI</div>
                    </div>
                    <div class="flex items-center p-0">
                       <icon class="flex items-center p-0" icon="pepicons-pop:line-y" color="gray" width="28" height="16" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center">
                        <div><icon class="flex items-center mr-2 pt-[4px]" icon="prime:circle-fill" color="gray" width="28" height="16" /></div>
                        <div class="text-md font-500">KAB. BADUNG</div>
                    </div>
                    <div class="flex items-center p-0">
                       <icon class="flex items-center p-0" icon="pepicons-pop:line-y" color="gray" width="28" height="16" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center">
                        <div><icon class="flex items-center mr-2 pt-[4px]" icon="prime:circle-fill" color="gray" width="28" height="16" /></div>
                        <div class="text-md font-500">ABIANSEMAL</div>
                    </div>
                    <div class="flex items-center p-0">
                       <icon class="flex items-center p-0" icon="pepicons-pop:line-y" color="gray" width="28" height="16" />
                    </div>
                </div>
               

               <div class="border border-solid border-gray rounded-xl py-2 flex justify-cinter">
                <div class="flex items-center">
                        <div><icon class="flex items-center mr-2 pt-[4px]" icon="vaadin:dot-circle" color="#E68027" width="28" height="16" /></div>
                        <div class="text-md font-500">Pilih Kode Pos</div>
                    </div>
               </div>

               <div class="pl-4 pr-2 py-4 overflow-y-scroll">
                <div class="flex">
                    <div class="w-full ">
                        <div class="pb-2 mb-2 border border-dashed border-gray border-x-0 border-t-0 font-500">909232</div>
                        <div class="pb-2 mb-2 border border-dashed border-gray border-x-0 border-t-0 font-500">909233</div>
                        <div class="pb-2 mb-2 border border-dashed border-gray border-x-0 border-t-0 font-500">909234</div>
                        <div class="pb-2 mb-2 border border-dashed border-gray border-x-0 border-t-0 font-500">909235</div>
                    </div>
                </div>

            </div>
               
            </div>

        </div>
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
  