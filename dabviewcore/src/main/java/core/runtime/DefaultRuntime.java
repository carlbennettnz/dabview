package core.runtime;

import core.runtime.interfaces.ApplicationRuntime;

public class DefaultRuntime implements ApplicationRuntime {
    private static Thread applicationThread;

    public Thread getApplicationThread() {
        return applicationThread;
    }

}
