// برنامه نویسی ماژولار

// فایلی که به عنوان ماژول میخواهید استفاده کنید
let num = (number)=>{
    console.log(number * 10)
}
export {num}

// روش دیفالت
// در این روش توی هر فایل فقط یک بار میتوانید اکسپورت کنید

let num_2 = (number_2)=>{
    console.log(number_2 * 10)
}
export default num_2




// فایلی که میخواهید از ماژول استفاده کنید
import {num} from 'js51.js'
num(10) // 100

// برای تغیر اسم ماژول
import {num as numbers} from 'js51.js'
numbers(30) // 300

// اگر از اکسپورت دیفالت استفاده شده باشد میتوانید از هر اسمی برای امپورت استفاده کرد
import nums_2 from 'js51.js'
nums_2(500) // 5000

// برای امپورت کردن تمامی کد های یک فایل
import * as numbers_2 from 'js51.js'

// برای دسترسی به کد های ان فایل باید مثل آبجکت رفتار کرد
numbers_2.num(20) // 200


