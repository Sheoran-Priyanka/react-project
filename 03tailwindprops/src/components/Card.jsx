import React from 'react'
// hm agr card mein props obj pass krenge to hmein props.username krke access krna pdega 
// ya hm sidha username bhi pass kr skte hn
// btntext = "click me " default value k liye diya agr hm koi value pass na kre btn text ki to ye click me le lega 
function Card({username,btntext = "Click me"}) {
    return (
        <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{username}</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
    {btntext}
    </button>
    {/* default value k liye ase bhi likh skte hn {btntext || "click me"} */}
  </div>
</div>
    )
}

export default Card
