//0 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(n){
    const series=[0,1];
     for (let i=2;i<n;i++){
        series[i]=series[i-1]+series[i-2];
     console.log(series[i])
    }
    console.log(series);

    // console.log(`Expected fibonacci series: ${series}`);

    }
    fibonacci(6);