<template>
    <div class="container">
        <img class="splash-img" src="../../assets/splash1.png" alt="Splash Screen picture 1">
        <div class="content">
            <h1>Let's Find the <span>Best</span> & <span>Healthy Grocery</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut velit fugit numquam praesentium eos sunt, ducimus cum quod explicabo fuga delectus, sequi libero impedit quos nisi, aliquam ipsam ipsum.</p>
            <Button>Let's Get Started</Button>
            <p>Already have an account <a>Sign In</a></p>
        </div>
    </div>
</template>

<style scope lang="scss">
    .container{
        height: 100vh;
        width: 100vw;
        background-color: #7ACDD6;
    }

    .splash-img{
        margin-top: 80px;
        height: 55%;
        z-index: -1;
    }

    .content{
        display: flex;
        bottom: 0;
        flex-direction: column;
        background-color: white;
        width: 100vw;
        height: 40vh;
        z-index: 0;
    }
    
    .container:before {
    box-shadow: 0 20px 0 0 white;    
    }
    
    .container:before {
        content: "";
        position:absolute;
        top:55vh;
        left:0;
        height:40px;
        width: 100vw;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        background:transparent;
    }

    .image-logo{
        margin-right: 14px;
        width: 36px;
        padding: 8px 10px;
        background-color: white;
        border-radius: 50%;
    }

    .title-logo{
        font-weight: 700;
        font-size: 20px;
    }
</style>