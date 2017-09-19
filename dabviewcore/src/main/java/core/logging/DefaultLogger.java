package core.logging;

import core.logging.interfaces.Logger;

public class DefaultLogger implements Logger {

    public void log(String message) {
        log("%s\n", message);
    }

    public void log(String format, String... args) {
        System.out.printf(format, args);
    }

    public void logException(Exception e) {
        e.printStackTrace();
    }
}
