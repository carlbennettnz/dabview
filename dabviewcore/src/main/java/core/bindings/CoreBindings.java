package core.bindings;

import com.google.inject.AbstractModule;
import core.logging.DefaultLogger;
import core.logging.interfaces.Logger;
import core.network.WebSocketApplicationServer;
import core.network.interfaces.ApplicationServer;
import core.runtime.interfaces.ApplicationRuntime;
import core.runtime.DefaultRuntime;

public class CoreBindings extends AbstractModule {

    @Override
    protected void configure() {
        /*
         * Bind the application core.runtime to the default core.runtime.
         */
        bind(ApplicationRuntime.class).to(DefaultRuntime.class);

        /*
         * Bind the WebSocket implementation to the default server
         */
        bind(ApplicationServer.class).to(WebSocketApplicationServer.class);

        /*
         * Bind a simple stdout logger.
         */
        bind(Logger.class).to(DefaultLogger.class);
    }

}
