

        const y = document.body.appendChild(document.createElement("button"))
        const events = document.addEventListener("click",ab)
        y.innerHTML = `Count is 0`
        count = 0;
        function ab() {
            count += 1;
            y.innerHTML = `Count is ${count}`
        }
        const x = document.body.appendChild(document.createElement("p"));
        x.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illo, voluptates ullam ea aliquam corporis maiores at,nihil nisi totam deserunt, reprehenderit dolores consequatur animi? Velit dignissimos maiores consequuntur iusto?"