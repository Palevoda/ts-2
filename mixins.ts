// class Youtube {
//   Begin() {
//     console.log("Hi, Welcome to my channel!");
//   }
//   Ending() {
//     console.log("Thank you for watching my video!");
//   }
// }
// class Subscribe {
//   Remind() {
//     console.log("Remember to subscribe to my channel");
//   }
// }
// // export class Recording extends Youtube, Subscribe{}
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach((baseCtor) => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//       Object.defineProperty(
//         derivedCtor.prototype,
//         name,
//         Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
//       );
//     });
//   });
// }
// export class Recording {}
// export interface Recording extends Youtube, Subscribe {}
// applyMixins(Recording, [Youtube, Subscribe]);
// const recording = new Recording();
// recording.Remind();
// recording.Ending();

// Disposable (одноразовый) mixin
class Disposable {
    isDisposed: boolean = true;
    dispose() {
        this.isDisposed = true;
    }
 
}
 
// Activatable (активируемый) mixin
class Activatable {
    isActive: boolean = false;
    activate() {
        this.isActive = !this.isActive;
    }
    deactivate() {
        this.isActive = !this.isActive;
    }
}
 
class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
 
    interact() {
        this.activate();
    }
 
    // Disposable
    isDisposed: boolean = false;
    dispose!: () => void;
    // Activatable
    isActive: boolean = false;
    activate!: () => void;
    deactivate!: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);
 
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
 
////////////////////////////////////////
// Где-то в вашей динамической библиотеке
////////////////////////////////////////
 
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
