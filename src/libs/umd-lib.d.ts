declare namespace umdLib {
    const vesion: string;
    function doSomething(): void
}

export as namespace umdLib;  // 专为 umd 库设置的语句
export = umdLib;