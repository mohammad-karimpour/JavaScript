// شرط با عملگر های منطقی
let age = 18

// اگر شرط مد نظر ترو باشد دستور اجرا میشود
age < 18 && console.log('این سن مجاز نمیباشد')

// اگر شرط مد نظر فالس باشد دستور اجرا میشود
age < 18 || console.log('سن شما قانونی است')

// اگر دیتا مد نظر مقدار null , undefined داشته باشد دستور اجرا میشود
console.log(age ?? 'مقدار نا معلوم' ) // 18
console.log(undefined ?? 'مقدار نا معلوم' ) // مقدار نا معلوم