# TypeScript

**= Language**

**= Typed Superset of Javascript**

**= compiles to plain Javascript**

# System, Compiler

### 타입 호환성(Type Compatibility)

타입 호환성은 TypeScript 코드에서 타입 간의 호환 가능성을 말함

이는 TypeScript의 핵심 컨셉 중 하나이며, 코드의 유연성과 타입 안정성 간의 균형을 유지하는 데 중

요한 역할을 함

타입 호환성은 구조적 서브타이핑을 기반으로 함

구조적 서브타이핑은 타입 간의 구조가 서로 호환 가능한지 여부를 결정 

또한 TypeScript는 `extends` 키워드를 사용하여 타입 간의 상속 관계를 표현할 수 있음

타입 호환성에 대한 자세한 내용은 TypeScript 핸드북을 참조

http://json.schemastore.org/tsconfig

### 최상위 프로퍼티

- **compileOnSave**
- **extends**
- **compileOptions**
- **files**
- **include**
- **exclude**
- **references**

### files, include, exclude

- files
    - 상대 혹은 절대 경로의 리스트 배열입니다
    - exclude 보다 쎕니다
- include, exclude
    - glob 패턴 (마치. gitignore)
    - include
        - exclude 보다 약합니다
        - *같은걸 사용하면 .ts / .tsx / .d.ts만 include(allowJS)
    - exclude
        - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, <outDir>를
            
            default로 제외합니다.
            
        - <outDir>은 항상 제외합니다.(include에 있어도)
    

### typeRoots, types

`typeRoots`는 TypeScript 컴파일러가 타입 선언 파일을 찾는 위치를 지정하는 옵션

이 옵션을 사용하면 `node_modules/@types` 외에 다른 디렉토리에서도 타입 선언 파일을 

찾을 수 있음

`types` 설정은 `typeRoots` 설정으로부터 찾아내는 타입 선언 파일 중에서 

선택적으로 사용할 수 있는 파일을 명시하는 옵션

이 옵션을 사용하면 `typeRoots` 설정에 명시된 위치에서 타입 선언 파일 전체를 

사용하는 것이 아니라, 필요한 타입 선언 파일만 선택하여 사용할 수 있음

이를 통해 컴파일 시간을 단축 가능

**typeRoots와 types는 같이 사용하지 않음**

### target 과 lib

TypeScript에서 `target` 옵션은 컴파일된 JavaScript 코드가 어떤 버전의 ECMAScript 

명세를 따르는지를 설정

예를 들어, `target`을 ES5로 설정하면 TypeScript 컴파일러는 ES5 명세에 따라 호환되는 

자바스크립트 코드를 생성

`lib` 옵션은 TypeScript 컴파일러가 가져올 라이브러리를 지정

이 값은 `target` 옵션에 따라 자동으로 설정됩니다.

예를 들어, `target` 옵션을 ES5로 설정하고 `lib` 옵션을 ES6로 설정하면, TypeScript 컴파일러는

ES5 명세에 따라 호환되는 자바스크립트 코드를 생성하면서 ES6 라이브러리를 가져올 수 있습니다.

### outDir, outFile, rootDir

### outDir

`outDir`은 컴파일된 파일의 출력 디렉토리를 설정하는 옵션

 TypeScript 컴파일러는 여러 개의 TypeScript 소스 파일을 컴파일한 후, 

`outDir` 옵션에 지정된 디렉토리에 컴파일된 JavaScript 파일들을 저장

### outFile

`outFile`은 컴파일된 파일의 출력 파일 이름을 설정하는 옵션

TypeScript 컴파일러는 여러 개의 TypeScript 소스 파일을 컴파일한 후, 

`outFile` 옵션에 지정된 파일 이름으로 컴파일된 JavaScript 파일을 하나로 합쳐서 저장

### rootDir

`rootDir`은 TypeScript 소스 파일의 루트 디렉토리를 설정하는 옵션

TypeScript 컴파일러는 `rootDir` 옵션에 지정된 디렉토리를 기준으로 

상대 경로로 소스 파일을 찾음

따라서 `rootDir` 옵션을 사용하면 TypeScript 소스 파일의 상대 경로를 짧게 유지할 수 있음

### strict

TypeScript에서 `strict` 옵션은 다양한 타입 체킹 옵션을 활성화

 이 옵션을 사용하면 코드의 안정성과 가독성을 높일 수 있음

- `noImplicitAny`: 암시적 any 타입을 금지
- `strictNullChecks`: null과 undefined의 사용을 제한
- `strictFunctionTypes`: 함수 타입의 호환성을 검사
- `strictBindCallApply`: bind, call, apply 함수의 인자의 타입을 검사
- `strictPropertyInitialization`: 클래스의 멤버 변수의 초기화를 강제
- `alwaysStrict`: strict 모드를 항상 활성화
