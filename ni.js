class ParentClass {
    mapLayerOrUnit(spec, normParams) {
        // Implementation in the parent class
        console.log('Mapping layer or unit in parent class');
        // Additional logic
    }
}

class ChildClass extends ParentClass {
    mapLayerOrUnit(spec, normParams) {
        // Call parent class method using super
        const result = super.mapLayerOrUnit(spec, normParams);
        
        // Additional functionality specific to the child class
        console.log('Additional functionality in child class');
        
        return result;
    }
}

const childInstance = new ChildClass();
childInstance.mapLayerOrUnit(specData, normParams);
