
var fm1 = new FluidMeter();
var fm2 = new FluidMeter();
var fm3 = new FluidMeter();
fm1.init( {
    targetContainer: document.getElementById( "card-1" ),
    fillPercentage: 85,
    options: {
        fontSize: "50px",
        fontFamily: "poppins",
        fontFillStyle: "white",
        drawShadow: true,
        drawText: true,
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 25,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
            fillStyle: "#A760FF",
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
        },
        backgroundFluidLayer: {
            fillStyle: "#d568df",
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
        }
    }
} );
fm2.init( {
    targetContainer: document.getElementById( "card-2" ),
    fillPercentage: 74,
    options: {
        fontSize: "50px",
        fontFamily: "poppins",
        fontFillStyle: "white",
        drawShadow: true,
        drawText: true,
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 25,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
            fillStyle: "#A760FF",
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
        },
        backgroundFluidLayer: {
            fillStyle: "#d568df",
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
        }
    }
} );
fm3.init( {
    targetContainer: document.getElementById( "card-3" ),
    fillPercentage: 65,
    options: {
        fontSize: "50px",
        fontFamily: "poppins",
        fontFillStyle: "white",
        drawShadow: true,
        drawText: true,
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 25,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
            fillStyle: "#A760FF",
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
        },
        backgroundFluidLayer: {
            fillStyle: "#d568df",
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
        }
    }
} );