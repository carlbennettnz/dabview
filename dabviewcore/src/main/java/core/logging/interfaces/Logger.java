package core.logging.interfaces;

public interface Logger {
    void log(String message);
    void log(String format, String...args);
    void logException(Exception e);
}
