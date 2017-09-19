import core.api.annotations.Control;
import core.api.annotations.Indicator;
import core.api.ApplicationBase;
import core.DabVIEW;
import core.runtime.interfaces.ApplicationRuntime;

import javax.inject.Inject;

public class SampleApplication extends ApplicationBase {
    private final Thread applicationThread;

    @Control(frontPanelLabel = "My core.api.annotations.Control")
    private int testControl = 0;

    @Indicator(frontPanelLabel = "My core.api.annotations.Indicator")
    private int testIndicator = 0;

    @Inject
    public SampleApplication(ApplicationRuntime applicationRuntime) {
        applicationThread = applicationRuntime.getApplicationThread();
    }

    public void onRunApplication() {
        while(!applicationThread.isInterrupted()) {
            testControl++;
        }
    }

    public void beforeStop() {
        applicationThread.interrupt();
    }


    public static void main(String[] argv) throws Exception {
        DabVIEW.initDabVIEW(new SampleConfiguration());
    }
}
