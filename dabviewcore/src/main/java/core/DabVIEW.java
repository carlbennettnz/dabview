package core;

import core.api.ApplicationBase;
import core.api.BaseConfiguration;
import core.bindings.CoreBindings;
import com.google.inject.*;
import core.logging.interfaces.Logger;
import core.network.interfaces.ApplicationServer;
import core.runtime.interfaces.ApplicationRuntime;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Singleton
public class DabVIEW {
    private final ApplicationBase application;
    private final ApplicationRuntime runtime;
    private final ApplicationServer applicationServer;
    private final Logger logger;


    public static DabVIEW initDabVIEW(BaseConfiguration applicationConfiguration) throws Exception {
        List<Module> modules = new ArrayList<Module>();
        modules.add(new CoreBindings());
        modules.addAll(Arrays.asList(applicationConfiguration.getModuleConfiguration()));
        Injector injector = Guice.createInjector(modules);
        return injector.getInstance(DabVIEW.class);
    }

    @Inject
    private DabVIEW(ApplicationBase application, ApplicationRuntime runtime, ApplicationServer applicationServer, Logger logger) {
        this.application = application;
        this.runtime = runtime;
        this.applicationServer = applicationServer;
        this.logger = logger;
        startDabVIEW();
    }

    private void startDabVIEW() throws IllegalStateException {
        applicationServer.start();
        logger.log("Application Started");
    }

}