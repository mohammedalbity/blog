export const useCategoryColor = (categoryName?: string) => {
    switch (categoryName) {
        case 'sports':
            return 'bg-blue-500';
        case 'health':
            return 'bg-green-500';
        case 'kristofer funk':
            return 'bg-yellow-500';
        default:
            return 'bg-gray-500';
    }
};