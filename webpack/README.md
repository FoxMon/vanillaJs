# Webpack

## Webpack Docs 참고

Webpack Study

    - Webpack이란 무엇일까?
        - Webpack은 여러 개의 파일을 하나의 파일로 합쳐주는 모듈 번들러(Module bundler)이다.
        - 표준화된 모듈화 기법이 등장하면서 Webpakc을 사용해야 하는 경우가 많아졌다.
            - Ex) import/export, IIFE(Immediately Invoked Function Expression), ES6 etc...
        - Server에서 처리하는 로직을 JavaScript로 구현하는 부분이 많아지면서 웹 서비스 개발에서 JavaScriopt로 작성하는 코드의 양도 늘어났다. 
        - 따라서 코드의 유지와 보수가 쉽도록 코드를 모듈로 나누어 관리하는 모듈 시스템이 필요해졌다.
        - 그러나 JavaScript 언어 자체가 지원하는 모듈 시스템이 없다. 이러한 한계를 극복하기 위해 Webpack을 사용한다.
        - 이외에도 Webpack은 모듈 시스템 구현 이외에도 로더, 빠른 컴파일 속도 등 장점이 많다.

    - Webpack을 이해하려면?
        - webpack에서는 module의 개념을 잘 이해해야 한다.
        - JavaScript에서 입구에 있는 파일 즉 최상단 import 파일을 Entry라고 한다.
            - 더 구체적이고 쉽게 설명하자면, 웹 자원을 변환하기 위해 필요한 최초 진입점이자 JavaScript의 파일 경로이다.

    - Webpack다루기
        - npm init
        - npm i -d webpack (-d는 devmode 의미) => 먼저 webpack을 설치
        - npm i -d wepback-cli => webpack cli를 설치
        - npx webpack --entry ./src/index.js --output-path ./public/ --output-filename index_bundle.js
            - webpack을 실행할건데, --entry를 .src/index.js --output-path 할건데 어디로 할거냐면 ./public/으로 할것이다.
            - 이 때, --output-filename(파일 이름은) index_bundle.js 이다.
            - 이렇게 함으로써, 가능해진 것은 import 라고 하는 예전 Browser에서 동작하지 않던 
            - import라는 것이 오래된 브라우저에서 동작이 가능하도록 index_bundle.js가 동작이 가능하도록 bundling해준 것이다.
            - 따라서 오래된 Browser에서도 이 코드가 동작이 가능하다는 강력한 장점을 가지게 됐다.

    - Webpack의 재사용성 증가
        - configuration을 추가하여 재사용성을 증가시키려면??
            - 중복되는 webpack 명령어를 더욱 효율적으로 사용할 수 있도록 작성한다.
        - webpack.config.js 만들기
            - webpack.config.js 참고
            - __dirname은 webpack.config.js가 위치한 경로를 알려주는 Node.js의 약속된 변수이다.
            - 그 경로의 dist라고 하는 하위 경로에 우리의 최종적인 경로를 가져다 놓는 것. (현재 실습에서는 public임)
            - filename: 'index_bundle.js'
            - 이렇게 하면 npx webpack --config webpack.config.js의 명령어가 위의 npx webpack ~~ 의 명령어와 같은 의미이다.

    - Mode 도입
        - 개발을 할 때와 배포를 할 때는 mode가 다르다.
        - webpack.config.js (개발할 때)
            - mode: "development" (개발모드)
        - webpack.config.prod.js (배포할 때)
            - mode: "production" (배포)

    - Loader 도입
        - css를 bundling 해보자
            - npm i -d == npm i --save-dev (같은 의미임)
            - npm i --save-dev style-loader css-loader
            - webpack.config.js 에서 module 추가
                rules: [
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader',
                        ], 
                    },
                ],
            - css-loader는 css파일을 읽어서 webpack으로 가져온다.
            - style-loader는 이렇게 가져온 css코드를 style태그로 주입해주는 loader이다.
            - 이 때 주의할 것은 css-loader가 먼저 실행되고, style-loader가 실행된다. 체이닝 돼있다.

    - Output 얻어내기
        - 여러가지 형태의 output을 가질 수 있어야 한다.
            - entry를 object형태로 수정한다.
            - output을 [name]로 수정한다. (약속된 형태임)
                entry: {
                    index: "./src/index.js",
                    about: "./src/about.js",
                },
                output: {
                    path: path.resolve(__dirname, "public"),
                    filename: "[name]_bundle.js",
                },