<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Change Profile</div>
          </div>
        </div>

        <div class="mx-8 my-6">
                <form class="flex flex-col px-2 pt-6" action="">

                <label for="name" class="my-2 text-sm font-bold text-black text-left">Name</label>
                <input
                    class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight rounded-md focus:outline-none focus:shadow-outline bg-white"
                    id="name"
                    type="name"
                    placeholder="John Doe"
                />
                <label for="email" class="my-2 text-sm font-bold text-black text-left">Email</label>
                <input
                    class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                />
                <label for="phone" class="my-2 text-sm font-bold text-black text-left">Phone Number</label>
                <input
                    class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="phone"
                    type="number"
                    placeholder="02938"
                />
                <label class="my-2 text-sm font-bold text-black text-left" for="dob">Date Of Birth</label>
                <input
                    class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="dob"
                    type="date"
                    placeholder="*********"
                />
                </form>

                <div class="flex flex-col items-center">
                <Button class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold">Submit</Button>
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
    height: 100%;
    color: #000000;
  }
  </style>
  