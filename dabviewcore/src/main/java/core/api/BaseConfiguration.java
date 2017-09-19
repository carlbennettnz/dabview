package core.api;

import com.google.inject.AbstractModule;

public interface BaseConfiguration {
    AbstractModule[] getModuleConfiguration();
}
