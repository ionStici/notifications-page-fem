"use strict";

// Show the number of notifications

const container = document.querySelector(".main");
const pictures = document.querySelectorAll(".not__profile-picture");
const notNum = document.querySelector(".h3--num");
const btn = document.querySelector(".btn-mark-all");
let unreadNots = document.querySelectorAll(".unread-not");
const nots = document.querySelectorAll(".not");
notNum.textContent = unreadNots.length;

// CHECK UNREAD NOTIFICATIONS

notNum.addEventListener("click", function () {
    unreadNots.forEach((not) => {
        not.style.filter = "brightness(0.9)";
        setTimeout(() => {
            not.style.filter = "brightness(1)";
        }, 100);
    });
});

// MARK NOTIFICATIONS

btn.addEventListener("click", function () {
    if (unreadNots.length > 0) {
        nots.forEach((not) => {
            not.classList.remove("unread-not");
        });
        btn.textContent = "Mark all as unread";
    } else {
        nots.forEach((not) => {
            not.classList.add("unread-not");
        });
        btn.textContent = "Mark all as read";
    }

    unreadNots = document.querySelectorAll(".unread-not");
    notNum.textContent = unreadNots.length;
});

// MARK AS UNREAD INDIVIDUALLY

container.addEventListener("click", function (e) {
    if (!e.target.classList.contains("not__profile-picture")) return;
    const not = e.target.closest(".not");
    not.classList.add("unread-not");

    unreadNots = document.querySelectorAll(".unread-not");
    notNum.textContent = unreadNots.length;
});

// END

console.log(
    "📌 Click on the profile picture to mark individually notifications as unread"
);

console.log(
    "📌 Click on the notification counter to emphasize unread notifications"
);
