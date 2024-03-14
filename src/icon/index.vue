<template>
  <div>
    <div v-if="icon == 'wallet'">
      <img :src="wallet" :width="width" :height="height" alt="wallet" />
    </div>
    <div v-else-if="icon == 'money'">
      <img :src="money" :width="width" :height="height" alt="money" />
    </div>
    <div v-else-if="icon == 'withdraw'">
      <img :src="withdraw" :width="width" :height="height" alt="withdraw" />
    </div>
    <div v-else-if="icon == 'outline-plus'">
      <img :src="outlinePlus" :width="width" :height="height" alt="outlinePlus" />
    </div>
    <div v-else-if="icon == 'more'">
      <img :src="more" :width="width" :height="height" alt="more" />
    </div>
    <div v-else-if="icon == 'bell-red-dot'">
      <img :src="bellRedDot" :width="width" :height="height" alt="more" />
    </div>
    <div v-else-if="icon == 'add-image'">
      <img :src="addImage" :width="width" :height="height" alt="addImage" />
    </div>
    <div v-else-if="icon == 'arrow-circle-black'">
      <img :src="arrowCircleBlack" :width="width" :height="height" alt="arrowCircleBlack" />
    </div>
    <div v-else-if="icon == 'arrow-cirlce'">
      <img :src="arrowCircle" :width="width" :height="height" alt="arrowCircle" />
    </div>
    <div v-else-if="icon == 'arrow-increase'">
      <img :src="arrowIncrease" :width="width" :height="height" alt="arrowIncrease" />
    </div>
    <div v-else-if="icon == 'back-arrow'">
      <img :src="backArrow" :width="width" :height="height" alt="backArrow" />
    </div>
    <div v-else-if="icon == 'bell'">
      <img :src="bell" :width="width" :height="height" alt="bell" />
    </div>
    <div v-else-if="icon == 'book'">
      <img :src="book" :width="width" :height="height" alt="book" />
    </div>
    <div v-else-if="icon == 'calendar-f'">
      <img :src="calendarF" :width="width" :height="height" alt="calendarF" />
    </div>
    <div v-else-if="icon == 'calendar-m'">
      <img :src="calendarM" :width="width" :height="height" alt="calendarM" />
    </div>
    <div v-else-if="icon == 'calendar-s'">
      <img :src="calendarS" :width="width" :height="height" alt="calendarS" />
    </div>
    <div v-else-if="icon == 'calendar-t'">
      <img :src="calendarT" :width="width" :height="height" alt="calendarT" />
    </div>
    <div v-else-if="icon == 'calendar-w'">
      <img :src="calendarW" :width="width" :height="height" alt="calendarW" />
    </div>
    <div v-else-if="icon == 'calendar'">
      <img :src="calendar" :width="width" :height="height" alt="calendar" />
    </div>
    <div v-else-if="icon == 'camera'">
      <img :src="camera" :width="width" :height="height" alt="camera" />
    </div>
    <div v-else-if="icon == 'card-checklist'">
      <img :src="cardChecklist" :width="width" :height="height" alt="cardChecklist" />
    </div>
    <div v-else-if="icon == 'cart'">
      <img :src="cart" :width="width" :height="height" alt="cart" />
    </div>
    <div v-else-if="icon == 'cash'">
      <img :src="cash" :width="width" :height="height" alt="cash" />
    </div>
    <div v-else-if="icon == 'category'">
      <img :src="category" :width="width" :height="height" alt="category" />
    </div>
    <div v-else-if="icon == 'change-image-profile'">
      <img :src="changeImageProfile" :width="width" :height="height" alt="changeImageProfile" />
    </div>
    <div v-else-if="icon == 'chat-single'">
      <img :src="chatSingle" :width="width" :height="height" alt="chatSingle" />
    </div>
    <div v-else-if="icon == 'circle-arrow-right'">
      <img :src="circleArrowRight" :width="width" :height="height" alt="circleArrowRight" />
    </div>
    <div v-else-if="icon == 'circle-checklist'">
      <img :src="circleChecklist" :width="width" :height="height" alt="circleChecklist" />
    </div>
    <div v-else-if="icon == 'circle-dot'">
      <img :src="circleDot" :width="width" :height="height" alt="circleDot" />
    </div>
    <div v-else-if="icon == 'clock'">
      <img :src="clock" :width="width" :height="height" alt="clock" />
    </div>
    <div v-else-if="icon == 'close'">
      <img :src="close" :width="width" :height="height" alt="close" />
    </div>
    <div v-else-if="icon == 'coin-star'">
      <img :src="coinStar" :width="width" :height="height" alt="coinStar" />
    </div>
    <div v-else-if="icon == 'complete-your-profile'">
      <img :src="completeYourProfile" :width="width" :height="height" alt="completeYourProfile" />
    </div>
    <div v-else-if="icon == 'coupon'">
      <img :src="coupon" :width="width" :height="height" alt="coupon" />
    </div>
    <div v-else-if="icon == 'current-location'">
      <img :src="currentLocation" :width="width" :height="height" alt="currentLocation" />
    </div>
    <div v-else-if="icon == 'customer'">
      <img :src="customer" :width="width" :height="height" alt="customer" />
    </div>
    <div v-else-if="icon == 'delivery'">
      <img :src="delivery" :width="width" :height="height" alt="delivery" />
    </div>
    <div v-else-if="icon == 'delivery-b'">
      <img :src="deliveryB" :width="width" :height="height" alt="deliveryB" />
    </div>
    <div v-else-if="icon == 'discount'">
      <img :src="discount" :width="width" :height="height" alt="discount" />
    </div>
    <div v-else-if="icon == 'dot-vertical'">
      <img :src="dotVertical" :width="width" :height="height" alt="dotVertical" />
    </div>
    <div v-else-if="icon == 'dot'">
      <img :src="dot" :width="width" :height="height" alt="dot" />
    </div>
    <div v-else-if="icon == 'dotted-circle'">
      <img :src="dottedCircle" :width="width" :height="height" alt="dottedCircle" />
    </div>
    <div v-else-if="icon == 'edit'">
      <img :src="edit" :width="width" :height="height" alt="edit" />
    </div>
    <div v-else-if="icon == 'eye'">
      <img :src="eye" :width="width" :height="height" alt="eye" />
    </div>
    <div v-else-if="icon == 'eye-slash'">
      <img :src="eyeSlash" :width="width" :height="height" alt="eyeSlash" />
    </div>
    <div v-else-if="icon == 'fill-arrow-right'">
      <img :src="fillArrowRight" :width="width" :height="height" alt="fillArrowRight" />
    </div>
    <div v-else-if="icon == 'fill-email'">
      <img :src="fillEmail" :width="width" :height="height" alt="fillEmail" />
    </div>
    <div v-else-if="icon == 'fill-logo'">
      <img :src="fillLogo" :width="width" :height="height" alt="fillLogo" />
    </div>
    <div v-else-if="icon == 'fill-note'">
      <img :src="fillNote" :width="width" :height="height" alt="fillNote" />
    </div>
    <div v-else-if="icon == 'fill-plus'">
      <img :src="fillPlus" :width="width" :height="height" alt="fillPlus" />
    </div>
    <div v-else-if="icon == 'filter'">
      <img :src="filter" :width="width" :height="height" alt="filter" />
    </div>
    <div v-else-if="icon == 'fork-knife'">
      <img :src="forkKnife" :width="width" :height="height" alt="forkKnife" />
    </div>
    <div v-else-if="icon == 'fresh-food'">
      <img :src="freshFood" :width="width" :height="height" alt="freshFood" />
    </div>
    <div v-else-if="icon == 'storling'">
      <img :src="storling" :width="width" :height="height" alt="storling" />
    </div>
    <div v-else-if="icon == 'search'">
      <img :src="search" :width="width" :height="height" alt="search" />
    </div>
    <div v-else-if="icon == 'home'">
      <img :src="home" :width="width" :height="height" alt="home" />
    </div>
    <div v-else-if="icon == 'home-active'">
      <img :src="homeActive" :width="width" :height="height" alt="homeActive" />
    </div>
    <div v-else-if="icon == 'group'">
      <img :src="group" :width="width" :height="height" alt="group" />
    </div>
    <div v-else-if="icon == 'heart'">
      <img :src="heart" :width="width" :height="height" alt="heart" />
    </div>
    <div v-else-if="icon == 'history'">
      <img :src="history" :width="width" :height="height" alt="history" />
    </div>
    <div v-else-if="icon == 'order'">
      <img :src="order" :width="width" :height="height" alt="order" />
    </div>
    <div v-else-if="icon == 'chat'">
      <img :src="chat" :width="width" :height="height" alt="chat" />
    </div>
    <div v-else-if="icon == 'image'">
      <img :src="image" :width="width" :height="height" alt="image" />
    </div>
    <div v-else-if="icon == 'info-b'">
      <img :src="infoB" :width="width" :height="height" alt="infoB" />
    </div>
    <div v-else-if="icon == 'info-c'">
      <img :src="infoC" :width="width" :height="height" alt="infoC" />
    </div>
    <div v-else-if="icon == 'info'">
      <img :src="info" :width="width" :height="height" alt="info" />
    </div>
    <div v-else-if="icon == 'like'">
      <img :src="like" :width="width" :height="height" alt="like" />
    </div>
    <div v-else-if="icon == 'line-dashed'">
      <img :src="lineDashed" :width="width" :height="height" alt="lineDashed" />
    </div>
    <div v-else-if="icon == 'line'">
      <img :src="line" :width="width" :height="height" alt="line" />
    </div>
    <div v-else-if="icon == 'location-b'">
      <img :src="locationB" :width="width" :height="height" alt="locationB" />
    </div>
    <div v-else-if="icon == 'location'">
      <img :src="location" :width="width" :height="height" alt="location" />
    </div>
    <div v-else-if="icon == 'lock'">
      <img :src="lock" :width="width" :height="height" alt="lock" />
    </div>
    <div v-else-if="icon == 'logo'">
      <img :src="logo" :width="width" :height="height" alt="logo" />
    </div>
    <div v-else-if="icon == 'logo-title'">
      <img :src="logoTitle" :width="width" :height="height" alt="logoTitle" />
    </div>
    <div v-else-if="icon == 'maps'">
      <img :src="maps" :width="width" :height="height" alt="maps" />
    </div>
    <div v-else-if="icon == 'maskot-chicken'">
      <img :src="maskotChicken" :width="width" :height="height" alt="maskotChicken" />
    </div>
    <div v-else-if="icon == 'menu'">
      <img :src="menu" :width="width" :height="height" alt="menu" />
    </div>
    <div v-else-if="icon == 'mic'">
      <img :src="mic" :width="width" :height="height" alt="mic" />
    </div>
    <div v-else-if="icon == 'minus'">
      <img :src="minus" :width="width" :height="height" alt="minus" />
    </div>
    <div v-else-if="icon == 'mitra'">
      <img :src="mitra" :width="width" :height="height" alt="mitra" />
    </div>
    <div v-else-if="icon == 'next-arrow'">
      <img :src="nextArrow" :width="width" :height="height" alt="nextArrow" />
    </div>
    <div v-else-if="icon == 'note-checklist'">
      <img :src="noteChecklist" :width="width" :height="height" alt="noteChecklist" />
    </div>
    <div v-else-if="icon == 'note'">
      <img :src="note" :width="width" :height="height" alt="note" />
    </div>
    <div v-else-if="icon == 'outline-arrow-left'">
      <img :src="outlineArrowLeft" :width="width" :height="height" alt="outlineArrowLeft" />
    </div>
    <div v-else-if="icon == 'outline-checklist'">
      <img :src="outlineChecklist" :width="width" :height="height" alt="outlineChecklist" />
    </div>
    <div v-else-if="icon == 'outline-email'">
      <img :src="outlineEmail" :width="width" :height="height" alt="outline" />
    </div>
    <div v-else-if="icon == 'outline-location'">
      <img :src="outlineLocation" :width="width" :height="height" alt="outlineLocation" />
    </div>
    <div v-else-if="icon == 'outline-location-b'">
      <img :src="outlineLocationB" :width="width" :height="height" alt="outline" />
    </div>
    <div v-else-if="icon == 'outline-phone'">
      <img :src="outlinePhone" :width="width" :height="height" alt="outlinePhone" />
    </div>
    <div v-else-if="icon == 'outline-close'">
      <img :src="outlineClose" :width="width" :height="height" alt="outlineClose" />
    </div>
    <div v-else-if="icon == 'outline-question'">
      <img :src="outlineQuestion" :width="width" :height="height" alt="outlineQuestion" />
    </div>
    <div v-else-if="icon == 'outline-shop'">
      <img :src="outlineShop" :width="width" :height="height" alt="outlinePhone" />
    </div>
    <div v-else-if="icon == 'outline-sign-out'">
      <img :src="outlineSignOut" :width="width" :height="height" alt="outlineSignOut" />
    </div>
    <div v-else-if="icon == 'packaging'">
      <img :src="packaging" :width="width" :height="height" alt="packaging" />
    </div>
    <div v-else-if="icon == 'paper-clip'">
      <img :src="paperClip" :width="width" :height="height" alt="edit" />
    </div>
    <div v-else-if="icon == 'person'">
      <img :src="person" :width="width" :height="height" alt="person" />
    </div>
    <div v-else-if="icon == 'phone'">
      <img :src="phone" :width="width" :height="height" alt="phone" />
    </div>
    <div v-else-if="icon == 'pin'">
      <img :src="pin" :width="width" :height="height" alt="pin" />
    </div>
    <div v-else-if="icon == 'plus'">
      <img :src="plus" :width="width" :height="height" alt="plus" />
    </div>
    <div v-else-if="icon == 'profile'">
      <img :src="profile" :width="width" :height="height" alt="profile" />
    </div>
    <div v-else-if="icon == 'promo-discount'">
      <img :src="promoDiscount" :width="width" :height="height" alt="promoDiscount" />
    </div>
    <div v-else-if="icon == 'queue'">
      <img :src="queue" :width="width" :height="height" alt="queue" />
    </div>
    <div v-else-if="icon == 'range'">
      <img :src="range" :width="width" :height="height" alt="range" />
    </div>
    <div v-else-if="icon == 'shipping'">
      <img :src="shipping" :width="width" :height="height" alt="shipping" />
    </div>
    <div v-else-if="icon == 'shop'">
      <img :src="shop" :width="width" :height="height" alt="shop" />
    </div>
    <div v-else-if="icon == 'shopping-bag'">
      <img :src="shoppingBag" :width="width" :height="height" alt="shoppingBag" />
    </div>
    <div v-else-if="icon == 'sign-out'">
      <img :src="signOut" :width="width" :height="height" alt="signOut" />
    </div>
    <div v-else-if="icon == 'star'">
      <img :src="star" :width="width" :height="height" alt="star" />
    </div>
    <div v-else-if="icon == 'terms-condition'">
      <img :src="termsCondition" :width="width" :height="height" alt="termsCondition" />
    </div>
    <div v-else-if="icon == 'trash-b'">
      <img :src="trashB" :width="width" :height="height" alt="trashB" />
    </div>
    <div v-else-if="icon == 'trash'">
      <img :src="trash" :width="width" :height="height" alt="trash" />
    </div>
    <div v-else-if="icon == 'upload'">
      <img :src="upload" :width="width" :height="height" alt="upload" />
    </div>
    <div v-else-if="icon == 'walking-person'">
      <img :src="walkingPerson" :width="width" :height="height" alt="walkingPerson" />
    </div>
    <div v-else-if="icon == 'wallet-plus'">
      <img :src="walletPlus" :width="width" :height="height" alt="walletPlus" />
    </div>
    <div v-else-if="icon == 'xendit'">
      <img :src="xendit" :width="width" :height="height" alt="xendit" />
    </div>
    <div v-else-if="icon == 'fill-plus-b'">
      <img :src="fillPlusB" :width="width" :height="height" alt="fillPlusB" />
    </div>
    <div v-else-if="icon == 'fill-minus'">
      <img :src="fillMinus" :width="width" :height="height" alt="fillMinus" />
    </div>
    <div v-else-if="icon == 'plus-white'">
      <img :src="plusWhite" :width="width" :height="height" alt="plusWhite" />
    </div>
    <div v-else-if="icon == 'minus-orange'">
      <img :src="minusOrange" :width="width" :height="height" alt="minusOrange" />
    </div>
    <div v-else-if="icon == 'circle-wallet'">
      <img :src="circleWallet" :width="width" :height="height" alt="circleWallet" />
    </div>
    <div v-else-if="icon == 'location-orange'">
      <img :src="locationOrange" :width="width" :height="height" alt="locationOrange" />
    </div>
    <div v-else-if="icon == 'withdraw-white'">
      <img :src="withdrawWhite" :width="width" :height="height" alt="withdrawWhite" />
    </div>
    <div v-else-if="icon == 'dot-darkgray'">
      <img :src="dotDarkgray" :width="width" :height="height" alt="dotDarkgray" />
    </div>
    <div v-else-if="icon == 'minus-white'">
      <img :src="minusWhite" :width="width" :height="height" alt="minusWhite" />
    </div>
    <div v-else-if="icon == 'info-b-black'">
      <img :src="infoBBlack" :width="width" :height="height" alt="infoBBlack" />
    </div>
    <div v-else-if="icon == 'next-arrow-blue'">
      <img :src="nextArrowBlue" :width="width" :height="height" alt="nextArrowBlue" />
    </div>
    <div v-else-if="icon == 'edit-black'">
      <img :src="editBlack" :width="width" :height="height" alt="editBlack" />
    </div>
    <div v-else-if="icon == 'next-arrow-black'">
      <img :src="nextArrowBlack" :width="width" :height="height" alt="nextArrowBlack" />
    </div>
    <div v-else-if="icon == 'edit-image-orange'">
      <img :src="editImageOrange" :width="width" :height="height" alt="editImageOrange" />
    </div>
    <div v-else-if="icon == 'plus-blue'">
      <img :src="plusBlue" :width="width" :height="height" alt="plusBlue" />
    </div>
    <div v-else-if="icon == 'circle-dot-orange'">
      <img :src="circleDotOrange" :width="width" :height="height" alt="circleDotOrange" />
    </div>
    <div v-else-if="icon == 'add-item-active'">
      <img :src="addItemActive" :width="width" :height="height" alt="addItemActive" />
    </div>
    <div v-else-if="icon == 'add-item-disable'">
      <img :src="addItemDisable" :width="width" :height="height" alt="addItemDisable" />
    </div>
    <div v-else-if="icon == 'reduce-item-active'">
      <img :src="reduceItemActive" :width="width" :height="height" alt="reduceItemActive" />
    </div>
    <div v-else-if="icon == 'reduce-item-disable'">
      <img :src="reduceItemDisable" :width="width" :height="height" alt="reduceItemDisable" />
    </div>
    <div v-else-if="icon == 'fill-plus-blue'">
      <img :src="fillPlusBlue" :width="width" :height="height" alt="fillPlusBlue" />
    </div>
    <div v-else-if="icon == 'fill-checklist'">
      <img :src="fillChecklist" :width="width" :height="height" alt="fillChecklist" />
    </div>
    <div v-else-if="icon == 'line-blue'">
      <img :src="lineBlue" :width="width" :height="height" alt="lineBlue" />
    </div>
    <div v-else-if="icon == 'circle-dot-blue'">
      <img :src="circleDotBlue" :width="width" :height="height" alt="circleDotBlue" />
    </div>
    <div v-else-if="icon == 'outline-line'">
      <img :src="outlineLine" :width="width" :height="height" alt="outlineLine" />
    </div>
    <div v-else-if="icon == 'info-b-white'">
      <img :src="infoBWhite" :width="width" :height="height" alt="infoBWhite" />
    </div>
  </div>
</template>

<script>
import wallet from "../assets/icon/wallet.svg";
import money from "../assets/icon/money.svg";
import withdraw from "../assets/icon/withdraw.svg";
import outlinePlus from "../assets/icon/outline-plus.svg";
import more from "../assets/icon/more.svg";
import freshFood from "../assets/icon/fresh-food.svg";
import homeActive from "../assets/icon/home-active.svg";
import addImage from "../assets/icon/add-image.svg";
import arrowCircle from "../assets/icon/arrow-circle.svg";
import arrowCircleBlack from "../assets/icon/arrow-circle-black.svg";
import arrowIncrease from "../assets/icon/arrow-increase.svg";
import backArrow from "../assets/icon/back-arrow.svg";
import bellRedDot from "../assets/icon/bell-red-dot.svg";
import bell from "../assets/icon/bell.svg";
import book from "../assets/icon/book.svg";
import calendarF from "../assets/icon/calendar-f.svg";
import calendarM from "../assets/icon/calendar-m.svg";
import calendarS from "../assets/icon/calendar-s.svg";
import calendarT from "../assets/icon/calendar-t.svg";
import calendarW from "../assets/icon/calendar-w.svg";
import calendar from "../assets/icon/calendar.svg";
import camera from "../assets/icon/camera.svg";
import cardChecklist from "../assets/icon/card-checklist.svg";
import cart from "../assets/icon/cart.svg";
import cash from "../assets/icon/cash.svg";
import category from "../assets/icon/category.svg";
import changeImageProfile from "../assets/icon/change-image-profile.svg";
import chatSingle from "../assets/icon/chat-single.svg";
import chat from "../assets/icon/chat.svg";
import circleArrowRight from "../assets/icon/circle-arrow-right.svg";
import circleChecklist from "../assets/icon/circle-checklist.svg";
import circleDot from "../assets/icon/circle-dot.svg";
import clock from "../assets/icon/clock.svg";
import coinStar from "../assets/icon/coin-star.svg";
import completeYourProfile from "../assets/icon/complete-your-profile.svg";
import coupon from "../assets/icon/coupon.svg";
import currentLocation from "../assets/icon/current-location.svg";
import customer from "../assets/icon/customer.svg";
import delivery from "../assets/icon/delivery.svg";
import deliveryB from "../assets/icon/delivery-b.svg";
import discount from "../assets/icon/discount.svg";
import dotVertical from "../assets/icon/dot-vertical.svg";
import dot from "../assets/icon/dot.svg";
import dottedCircle from "../assets/icon/dotted-circle.svg";
import edit from "../assets/icon/edit.svg";
import eyeSlash from "../assets/icon/eye-slash.svg";
import eye from "../assets/icon/eye.svg";
import fillArrowRight from "../assets/icon/fill-arrow-right.svg";
import fillEmail from "../assets/icon/fill-email.svg";
import fillLogo from "../assets/icon/fill-logo.svg";
import fillNote from "../assets/icon/fill-note.svg";
import fillPlus from "../assets/icon/fill-plus.svg";
import filter from "../assets/icon/filter.svg";
import forkKnife from "../assets/icon/fork-knife.svg";
import group from "../assets/icon/group.svg";
import heart from "../assets/icon/heart.svg";
import history from "../assets/icon/history.svg";
import home from "../assets/icon/home.svg";
import image from "../assets/icon/image.svg";
import infoB from "../assets/icon/info-b.svg";
import infoC from "../assets/icon/info-c.svg";
import info from "../assets/icon/info.svg";
import like from "../assets/icon/like.svg";
import lineDashed from "../assets/icon/line-dashed.svg";
import line from "../assets/icon/line.svg";
import locationB from "../assets/icon/location-b.svg";
import location from "../assets/icon/location.svg";
import lock from "../assets/icon/lock.svg";
import logoTitle from "../assets/icon/logo-title.svg";
import logo from "../assets/icon/logo.svg";
import maps from "../assets/icon/maps.svg";
import maskotChicken from "../assets/icon/maskot-chicken.svg";
import menu from "../assets/icon/menu.svg";
import mic from "../assets/icon/mic.svg";
import minus from "../assets/icon/minus.svg";
import mitra from "../assets/icon/mitra.svg";
import nextArrow from "../assets/icon/next-arrow.svg";
import noteChecklist from "../assets/icon/note-checklist.svg";
import note from "../assets/icon/note.svg";
import order from "../assets/icon/order.svg";
import outlineArrowLeft from "../assets/icon/outline-arrow-left.svg";
import outlineChecklist from "../assets/icon/outline-checklist.svg";
import outlineClose from "../assets/icon/outline-close.svg";
import outlineEmail from "../assets/icon/outline-email.svg";
import outlineLocationB from "../assets/icon/outline-location-b.svg";
import outlineLocation from "../assets/icon/outline-location.svg";
import outlinePhone from "../assets/icon/outline-phone.svg";
import outlineQuestion from "../assets/icon/outline-question.svg";
import outlineShop from "../assets/icon/outline-shop.svg";
import outlineSignOut from "../assets/icon/outline-sign-out.svg";
import packaging from "../assets/icon/packaging.svg";
import paperClip from "../assets/icon/paper-clip.svg";
import person from "../assets/icon/person.svg";
import phone from "../assets/icon/phone.svg";
import pin from "../assets/icon/pin.svg";
import plus from "../assets/icon/plus.svg";
import profile from "../assets/icon/profile.svg";
import promoDiscount from "../assets/icon/promo-discount.svg";
import queue from "../assets/icon/queue.svg";
import range from "../assets/icon/range.svg";
import search from "../assets/icon/search.svg";
import shipping from "../assets/icon/shipping.svg";
import shop from "../assets/icon/shop.svg";
import shoppingBag from "../assets/icon/shopping-bag.svg";
import signOut from "../assets/icon/sign-out.svg";
import star from "../assets/icon/star.svg";
import storling from "../assets/icon/storling.svg";
import success from "../assets/icon/success.svg";
import termsCondition from "../assets/icon/terms-condition.svg";
import trashB from "../assets/icon/trash-b.svg";
import trash from "../assets/icon/trash.svg";
import upload from "../assets/icon/upload.svg";
import walkingPerson from "../assets/icon/walking-person.svg";
import walletPlus from "../assets/icon/wallet-plus.svg";
import xendit from "../assets/icon/xendit.svg";
import fillPlusB from "../assets/icon/fill-plus-b.svg";
import fillMinus from "../assets/icon/fill-minus.svg";
import plusWhite from "../assets/icon/plus-white.svg";
import minusOrange from "../assets/icon/minus-orange.svg";
import circleWallet from "../assets/icon/circle-wallet.svg";
import locationOrange from "../assets/icon/location-orange.svg";
import withdrawWhite from "../assets/icon/withdraw-white.svg";
import dotDarkgray from "../assets/icon/dot-darkgray.svg";
import minusWhite from "../assets/icon/minus-white.svg";
import infoBBlack from "../assets/icon/info-b-black.svg";
import editBlack from "../assets/icon/edit-black.svg";
import nextArrowBlue from "../assets/icon/next-arrow-blue.svg";
import nextArrowBlack from "../assets/icon/next-arrow-black.svg";
import editImageOrange from "../assets/icon/edit-image-orange.svg";
import plusBlue from "../assets/icon/plus-blue.svg";
import circleDotOrange from "../assets/icon/circle-dot-orange.svg";
import addItemActive from "../assets/icon/add-item-active.svg";
import addItemDisable from "../assets/icon/add-item-disable.svg";
import reduceItemActive from "../assets/icon/reduce-item-active.svg";
import reduceItemDisable from "../assets/icon/reduce-item-disable.svg";
import fillPlusBlue from "../assets/icon/fill-plus-blue.svg";
import fillChecklist from "../assets/icon/fill-checklist.svg";
import lineBlue from "../assets/icon/line-blue.svg";
import circleDotBlue from "../assets/icon/circle-dot-blue.svg";
import outlineLine from "../assets/icon/outline-line.svg";
import infoBWhite from "../assets/icon/info-b-white.svg";

export default {
  props: {
    icon: String,
    height: String,
    width: String,
  },
  data() {
    return {
      wallet,
      money,
      withdraw,
      outlinePlus,
      more,
      bellRedDot,
      freshFood,
      storling,
      search,
      home,
      history,
      order,
      chat,
      profile,
      homeActive,
      addImage,
      arrowCircle,
      arrowCircleBlack,
      arrowIncrease,
      backArrow,
      bellRedDot,
      bell,
      book,
      calendarF,
      calendarM,
      calendarS,
      calendarT,
      calendarW,
      calendar,
      camera,
      cardChecklist,
      cart,
      cash,
      category,
      changeImageProfile,
      chatSingle,
      chat,
      circleArrowRight,
      circleChecklist,
      circleDot,
      clock,
      coinStar,
      completeYourProfile,
      coupon,
      currentLocation,
      customer,
      delivery,
      deliveryB,
      discount,
      dotVertical,
      dot,
      dottedCircle,
      edit,
      eyeSlash,
      eye,
      fillArrowRight,
      fillEmail,
      fillLogo,
      fillNote,
      fillPlus,
      filter,
      forkKnife,
      freshFood,
      group,
      heart,
      history,
      home,
      image,
      infoB,
      infoC,
      info,
      like,
      lineDashed,
      line,
      locationB,
      location,
      lock,
      logoTitle,
      logo,
      maps,
      maskotChicken,
      menu,
      mic,
      minus,
      mitra,
      nextArrow,
      noteChecklist,
      note,
      order,
      outlineArrowLeft,
      outlineChecklist,
      outlineClose,
      outlineEmail,
      outlineLocationB,
      outlineLocation,
      outlinePhone,
      outlineQuestion,
      outlineShop,
      outlineSignOut,
      packaging,
      paperClip,
      person,
      phone,
      pin,
      plus,
      profile,
      promoDiscount,
      queue,
      range,
      search,
      shipping,
      shop,
      shoppingBag,
      signOut,
      star,
      storling,
      success,
      termsCondition,
      trashB,
      trash,
      upload,
      walkingPerson,
      walletPlus,
      xendit,
      fillPlusB,
      fillMinus,
      plusWhite,
      minusOrange,
      circleWallet,
      locationOrange,
      withdrawWhite,
      dotDarkgray,
      minusWhite,
      infoBBlack,
      nextArrowBlue,
      editBlack,
      nextArrowBlack,
      editImageOrange,
      plusBlue,
      circleDotOrange,
      addItemActive,
      addItemDisable,
      reduceItemActive,
      reduceItemDisable,
      fillPlusBlue,
      fillChecklist,
      lineBlue,
      circleDotBlue,
      outlineLine,
      infoBWhite

      
    };
  },
};
</script>
