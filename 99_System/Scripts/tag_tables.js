/**
 * tagTables.js
 * Expects 'input' to contain the source file object if passed, 
 * otherwise defaults to dv.current()
 */

// We get the file object either from the function input or the current file
const sourceFile = input || dv.current();
const currentTags = sourceFile.file.tags;

if (!currentTags || currentTags.length === 0) {
    dv.paragraph("No tags found on this page.");
} else {
    for (const tag of currentTags) {
        
        dv.header(3, tag);
        
        const pages = dv.pages('"10_Concepts"')
            .where(p => 
                p.file.name != sourceFile.file.name && 
                p.file.tags.includes(tag)
            )
            .limit(10);

        if (pages.length > 0) {
            dv.table(
                ["File", "Folder"], 
                pages.map(p => [p.file.link, p.file.folder])
            );
        } else {
            dv.paragraph(`*No matches in 10_Concepts.*`);
        }
    }
}
