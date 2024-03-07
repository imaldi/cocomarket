<template>
    <div>
      <div class="container pb-20">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Cocopay</div>
          </div>
        </div>
  
        <div class="mx-8 pt-8">
            <div class="mb-6">
                <div class="flex items-center mb-2">
                    <div class="flex items-center mr-2">
                        <icon class="#E68027 rounded-full" icon="ep:wallet-filled" color="#E68027" height="28"/>
                    </div>
                    <div class="font-bold ">Cocopay Balance</div>
                </div>


                <div>
                    <div class="font-bold text-4xl">Rp.12.000,00</div>
                </div>
            </div>

            <div class="flex justify-between px-14 mb-6">
                <div class="border-4 border-solid border-[#7ACDD6] border-x-0 border-t-0 pb-2">
                    <div class="font-bold text-xl px-2">Withdraw</div>
                </div>
                <div class="">
                    <div class="font-bold text-xl px-2">Top Up</div>
                </div>
            </div>

            <div class="mb-2">
                <div>
                    <input class="w-72 border border-solid border-[#7ACDD6] px-4 py-4 rounded-2xl" type="text" name="amount" id="amount" placeholder="Enter Amount">
                </div>
                <div class="flex text-gray text-sm ">Minimum Rp. 10.000 required<div class="text-red">*</div></div>
            </div>

            <div class="flex justify-between mb-5">
                <div class="text-[#7ACDD6] text-xs border border-solid border-[#7ACDD6] rounded-2xl p-2">Rp.10.000</div>
                <div class="text-[#7ACDD6] text-xs border border-solid border-[#7ACDD6] rounded-2xl p-2">Rp.15.000</div>
                <div class="text-[#7ACDD6] text-xs border border-solid border-[#7ACDD6] rounded-2xl p-2">Rp.20.000</div>
                <div class="text-[#7ACDD6] text-xs border border-solid border-[#7ACDD6] rounded-2xl p-2">Rp.25.000</div>
            </div>

            <div class="mb-4">
                <select class="p-2 text-base border-0 bg-black rounded-xl text-white" name="date" id="date">
                    <option value="volvo">Date</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

            <div class="font-bold text-md mb-4">
                Saturday, 20 September 2023
            </div>

            <div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="ep:wallet-filled"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Top Up with Xendit</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-green font-bold flex items-center">+ Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
                <div class="flex mb-4">
                    <div class="w-1/6 flex items-center">
                        <icon
                            class="bg-[#7ACDD6] p-2 rounded-full"
                            icon="lets-icons:size-down"
                            color="white"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div class="w-3/4">
                        <div class="font-semibold text-sm">Withdraw to Bank Mandiri</div>
                        <div class="flex items-center text-xs text-gray">
                            <div>Sep 20th 2024</div>
                            <icon
                            class="mx-2"
                            icon="icon-park-outline:dot"
                            color="gray"
                            width="10"
                            height="10"
                            />
                            <div>08:15 AM</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-sm text-red font-bold flex items-center">- Rp. 12.000</div>

                </div>
            </div>

      </div>  

      <div class="relative">
      <div class="fixed w-full h-[54vh] bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex justify-center">
              <div class="bg-gray rounded-full w-20 h-1 m-2 "></div>
          </div>

          <div class="mt-2 px-10">
            <div class="font-semibold text-sm">Amount</div>
            
            <div class="font-bold text-2xl border border-solid border-gray border-x-0 border-t-0 py-4 text-center">Rp.50.000</div>

            <div>
                <form action="">
                <div class="text-sm font-semibold my-4">Select Method</div>
                <div class="flex items-center justify-between border border-gray border-solid rounded-xl px-4 py-2">
                    <div><icon icon="simple-icons:xendit" color="black" width="28" height="28" /></div>
                   <div class="text-sm font-semibold mr-38">Xendit</div> 
                   <input class="p-2" name="selectMethod" type="radio" id="Xendit" value="Xendit">
                </div>
            </form>
            </div>

            <div class="mt-19vh">
                <div class="flex py-4 mr-8 rounded-2xl bg-primary w-full justify-center">
                    <div class="text-2xl text-white">Withdraw</div>
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
    // height: 100vh;
    color: #000000;
  }
  </style>
  